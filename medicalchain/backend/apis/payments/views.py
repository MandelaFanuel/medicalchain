from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from decimal import Decimal
from web3 import Web3
import logging

from backend.apps.payments.models import (
    Payment,
    Wallet,
    TransactionHistory,
    BlockchainTransaction,
)
from .serializers import (
    PaymentSerializer,
    WalletSerializer,
    DepositSerializer,
    TransactionHistorySerializer,
    BlockchainPaymentSerializer,
)
from django.conf import settings

logger = logging.getLogger(__name__)


class PaymentCreateView(generics.CreateAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        payment_category = serializer.validated_data.get("payment_category")

        if payment_category == "doctor_subscription":
            return self.handle_doctor_subscription(serializer)
        return self.handle_appointment_payment(serializer)

    def handle_doctor_subscription(self, serializer):
        user = self.request.user
        if user.is_verified_doctor:
            raise ValidationError("You are already a verified doctor")

        payment = serializer.save(paid_by=user, payment_status="Pending", amount=15000)

        if serializer.validated_data.get("payment_method") == "wallet":
            return self.process_wallet_payment(payment)
        return payment

    def handle_appointment_payment(self, serializer):
        appointment = serializer.validated_data.get("appointment")
        if appointment and appointment.is_paid:
            raise ValidationError("This appointment is already paid")

        payment = serializer.save(paid_by=self.request.user, payment_status="Pending")

        if serializer.validated_data.get("payment_method") == "wallet":
            self.process_wallet_payment(payment)
        return payment

    def process_wallet_payment(self, payment):
        wallet = Wallet.objects.get(user=self.request.user)
        if wallet.balance < payment.amount:
            raise ValidationError("Insufficient wallet balance")

        wallet.balance -= payment.amount
        wallet.save()

        TransactionHistory.objects.create(
            wallet=wallet,
            transaction_type="payment",
            amount=payment.amount,
            payment_reference=payment,
            description=f"Payment for {payment.get_payment_category_display()}",
        )

        payment.payment_status = "completed"
        payment.save()

        if payment.payment_category == "doctor_subscription":
            user = self.request.user
            user.is_verified_doctor = True
            user.save()


class WalletDetailView(generics.RetrieveAPIView):
    serializer_class = WalletSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        wallet, _ = Wallet.objects.get_or_create(user=self.request.user)
        return wallet


class DepositToWalletView(generics.CreateAPIView):
    serializer_class = DepositSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        wallet, _ = Wallet.objects.get_or_create(user=request.user)
        wallet.deposit(serializer.validated_data["amount"])

        TransactionHistory.objects.create(
            wallet=wallet,
            transaction_type="deposit",
            amount=serializer.validated_data["amount"],
            description="Wallet deposit",
        )

        return Response(
            {"message": "Deposit successful", "balance": wallet.balance},
            status=status.HTTP_200_OK,
        )


class BlockchainPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = BlockchainPaymentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        user = request.user

        # Validate amount
        if data["payment_category"] == "doctor_subscription":
            if data["amount"] != Decimal("15000"):
                return Response(
                    {"error": "Doctor subscription must be 15,000 FBU"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        elif data["amount"] < Decimal("50000"):
            return Response(
                {"error": "Minimum amount is 50,000 FBU"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Create payment record
        payment = Payment.objects.create(
            amount=data["amount"],
            payment_status="pending",
            payment_category=data["payment_category"],
            payment_method=data["network"],
            paid_by=user,
            blockchain_payment=True,
            network=data["network"],
            blockchain_address=data["wallet_address"],
        )

        if data.get("appointment_id"):
            try:
                from backend.apps.appointments.models import Appointment

                payment.appointment = Appointment.objects.get(id=data["appointment_id"])
                payment.save()
            except Appointment.DoesNotExist:
                pass

        # Prepare response for frontend
        response_data = {
            "payment_id": payment.id,
            "amount": str(data["amount"]),
            "recipient_address": settings.BLOCKCHAIN_CONFIG["CONTRACT_ADDRESS"],
            "contract_address": settings.BLOCKCHAIN_CONFIG["CONTRACT_ADDRESS"],
            "network": data["network"],
            "abi": settings.CONTRACT_ABI,
        }

        return Response(response_data, status=status.HTTP_200_OK)


class VerifyBlockchainPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        payment_id = request.data.get("payment_id")
        tx_hash = request.data.get("tx_hash")

        if not payment_id or not tx_hash:
            return Response(
                {"error": "Missing payment_id or tx_hash"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            payment = Payment.objects.get(id=payment_id, paid_by=request.user)
        except Payment.DoesNotExist:
            return Response(
                {"error": "Payment not found"}, status=status.HTTP_404_NOT_FOUND
            )

        # Verify transaction on blockchain
        w3 = Web3(Web3.HTTPProvider(settings.BLOCKCHAIN_CONFIG["PROVIDER_URL"]))

        try:
            tx_receipt = w3.eth.get_transaction_receipt(tx_hash)

            if tx_receipt is None:
                return Response(
                    {"error": "Transaction not found or not yet mined"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            if tx_receipt.status == 1:  # Success
                payment.payment_status = "completed"
                payment.save()

                # Record blockchain transaction
                tx = w3.eth.get_transaction(tx_hash)
                BlockchainTransaction.objects.create(
                    payment=payment,
                    tx_hash=tx_hash,
                    network=payment.network,
                    block_number=tx_receipt.blockNumber,
                    gas_used=tx_receipt.gasUsed,
                    gas_price=tx["gasPrice"],
                )

                # Update doctor status if subscription
                if payment.payment_category == "doctor_subscription":
                    user = request.user
                    user.is_verified_doctor = True
                    user.save()

                return Response(
                    {"status": "success", "message": "Payment verified"},
                    status=status.HTTP_200_OK,
                )
            else:
                payment.payment_status = "failed"
                payment.save()
                return Response(
                    {"status": "failed", "message": "Transaction failed"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        except Exception as e:
            logger.error(f"Error verifying blockchain payment: {str(e)}", exc_info=True)
            payment.payment_status = "failed"
            payment.save()
            return Response(
                {"error": "Error verifying transaction. Please try again later."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class PaymentListView(generics.ListAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Payment.objects.filter(paid_by=self.request.user).order_by(
            "-payment_date"
        )


class TransactionHistoryView(generics.ListAPIView):
    serializer_class = TransactionHistorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        wallet = Wallet.objects.get(user=self.request.user)
        return TransactionHistory.objects.filter(wallet=wallet).order_by("-date")
