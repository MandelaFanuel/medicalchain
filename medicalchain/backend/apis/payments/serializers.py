from rest_framework import serializers
from backend.apps.payments.models import (
    Payment,
    Wallet,
    TransactionHistory,
    BlockchainTransaction,
)
from django.utils.timezone import localtime


class BlockchainTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockchainTransaction
        fields = "__all__"


class BlockchainPaymentSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    payment_category = serializers.CharField()
    appointment_id = serializers.IntegerField(required=False)
    wallet_address = serializers.CharField()
    network = serializers.CharField()


class PaymentSerializer(serializers.ModelSerializer):
    appointment_details = serializers.SerializerMethodField()
    payment_method_display = serializers.SerializerMethodField()
    payment_category_display = serializers.SerializerMethodField()
    paid_by_name = serializers.SerializerMethodField()
    formatted_amount = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    blockchain_transactions = BlockchainTransactionSerializer(many=True, read_only=True)

    class Meta:
        model = Payment
        fields = [
            "id",
            "appointment",
            "amount",
            "formatted_amount",
            "payment_category",
            "payment_category_display",
            "payment_method",
            "payment_method_display",
            "payment_status",
            "transaction_id",
            "payment_date",
            "formatted_date",
            "paid_by",
            "paid_by_name",
            "appointment_details",
            "blockchain_payment",
            "network",
            "blockchain_address",
            "blockchain_transactions",
        ]

    def get_formatted_amount(self, obj):
        if obj.payment_category == "doctor_subscription":
            return "15,000 FBU"
        return f"{obj.amount:.2f} FBU" if obj.amount else "0 FBU"

    def get_payment_method_display(self, obj):
        return obj.get_payment_method_display()

    def get_payment_category_display(self, obj):
        return obj.get_payment_category_display()

    def get_paid_by_name(self, obj):
        return obj.paid_by.get_full_name() if obj.paid_by else "Unknown"

    def get_formatted_date(self, obj):
        return (
            localtime(obj.payment_date).strftime("%d %B %Y, %H:%M")
            if obj.payment_date
            else None
        )

    def get_appointment_details(self, obj):
        if not obj.appointment:
            return None
        return {
            "doctor": obj.appointment.doctor.user.get_full_name(),
            "patient": obj.appointment.patient.get_full_name(),
            "reason": obj.appointment.appointment_reason,
            "date": obj.appointment.appointment_date.strftime("%Y-%m-%d"),
            "time": obj.appointment.appointment_time.strftime("%H:%M"),
        }


class WalletSerializer(serializers.ModelSerializer):
    balance_display = serializers.SerializerMethodField()
    blockchain_address = serializers.CharField(read_only=True)

    class Meta:
        model = Wallet
        fields = ["id", "balance", "balance_display", "blockchain_address"]

    def get_balance_display(self, obj):
        return f"{obj.balance:.2f} FBU"


class DepositSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=10, decimal_places=2, min_value=50000)


class TransactionHistorySerializer(serializers.ModelSerializer):
    formatted_amount = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()

    class Meta:
        model = TransactionHistory
        fields = "__all__"

    def get_formatted_amount(self, obj):
        prefix = "+" if obj.transaction_type == "deposit" else "-"
        return f"{prefix}{obj.amount:.2f} FBU"

    def get_formatted_date(self, obj):
        return obj.date.strftime("%d %B %Y, %H:%M")
