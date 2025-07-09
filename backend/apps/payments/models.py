from django.db import models
from decimal import Decimal
from backend.apps.users.models import CustomUser
from backend.apps.formats.base import BaseModel
from django.core.exceptions import ValidationError
from django.utils import timezone


class Wallet(BaseModel):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="wallet", verbose_name="User"
    )
    balance = models.DecimalField(
        max_digits=15, decimal_places=2, default=Decimal("0.00"), verbose_name="Balance"
    )
    blockchain_address = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Blockchain Address"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Wallet"
        verbose_name_plural = "Wallets"
        ordering = ["-created_at"]

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        amount = Decimal(str(amount))
        self.balance += amount
        self.save()
        self.record_transaction("deposit", amount)

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        amount = Decimal(str(amount))
        if self.balance >= amount:
            self.balance -= amount
            self.save()
            self.record_transaction("withdrawal", amount)
            return True
        return False

    def record_transaction(self, transaction_type, amount):
        TransactionHistory.objects.create(
            wallet=self,
            transaction_type=transaction_type,
            amount=amount,
            description=f"{transaction_type.capitalize()} of {amount} FBU",
        )

    def __str__(self):
        return f"Wallet of {self.user.get_full_name()} - Balance: {self.balance} FBU"


class BlockchainTransaction(models.Model):
    payment = models.ForeignKey(
        "Payment", on_delete=models.CASCADE, related_name="blockchain_transactions"
    )
    tx_hash = models.CharField(max_length=100, unique=True)
    network = models.CharField(max_length=50)
    contract_address = models.CharField(max_length=100)
    block_number = models.PositiveIntegerField(null=True, blank=True)
    gas_used = models.DecimalField(
        max_digits=50, decimal_places=0, null=True, blank=True
    )
    gas_price = models.DecimalField(
        max_digits=50, decimal_places=0, null=True, blank=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Blockchain Transaction"
        verbose_name_plural = "Blockchain Transactions"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.tx_hash} ({self.network})"


class Payment(BaseModel):
    MOBILE_METHODS = (
        ("lumicash", "Lumicash"),
        ("ecocash", "Ecocash"),
        ("pesa_flash", "Pesa Flash"),
    )

    CRYPTO_METHODS = (
        ("ethereum", "Ethereum"),
        ("bnb", "BNB"),
        ("matic", "Polygon"),
    )

    CARD_METHODS = (
        ("visa", "Visa Card"),
        ("mastercard", "Master Card"),
    )

    PAYMENT_CATEGORIES = (
        ("mobile", "Mobile Money"),
        ("crypto", "Cryptocurrency"),
        ("card", "Credit/Debit Card"),
        ("wallet", "Medichain Wallet"),
        ("doctor_subscription", "Doctor Subscription"),
    )

    PAYMENT_STATUSES = (
        ("pending", "Pending"),
        ("completed", "Completed"),
        ("failed", "Failed"),
        ("refunded", "Refunded"),
    )

    appointment = models.OneToOneField(
        "appointments.Appointment",
        on_delete=models.CASCADE,
        related_name="payment",
        verbose_name="Appointment",
        null=True,
        blank=True,
    )
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name="Amount",
        default=Decimal("50000.00"),
    )
    payment_date = models.DateTimeField(auto_now_add=True, verbose_name="Payment date")
    payment_status = models.CharField(
        max_length=20,
        choices=PAYMENT_STATUSES,
        default="pending",
        verbose_name="Payment status",
    )
    payment_category = models.CharField(
        max_length=20,
        choices=PAYMENT_CATEGORIES,
        default="wallet",
        verbose_name="Payment category",
    )
    payment_method = models.CharField(
        max_length=20, verbose_name="Payment method", default="wallet"
    )
    transaction_id = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name="Transaction ID",
        default="TXN-0000",
    )
    paid_by = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Paid by",
    )
    wallet = models.ForeignKey(
        Wallet,
        related_name="payments",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Wallet",
    )
    blockchain_payment = models.BooleanField(default=False)
    network = models.CharField(max_length=50, blank=True, null=True)
    blockchain_address = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Payment"
        verbose_name_plural = "Payments"
        ordering = ["-payment_date"]

    def clean(self):
        if (
            self.amount < Decimal("50000")
            and self.payment_category != "doctor_subscription"
        ):
            raise ValidationError("Amount must be at least 50,000 FBU")

        if self.payment_category == "mobile" and self.payment_method not in dict(
            self.MOBILE_METHODS
        ):
            raise ValidationError(f"Invalid mobile method: {self.payment_method}")

        if self.payment_category == "crypto" and self.payment_method not in dict(
            self.CRYPTO_METHODS
        ):
            raise ValidationError(f"Invalid crypto method: {self.payment_method}")

        if self.payment_category == "card" and self.payment_method not in dict(
            self.CARD_METHODS
        ):
            raise ValidationError(f"Invalid card method: {self.payment_method}")

    def save(self, *args, **kwargs):
        self.full_clean()
        if not self.transaction_id or self.transaction_id == "TXN-0000":
            self.generate_transaction_id()
        super().save(*args, **kwargs)

    def generate_transaction_id(self):
        timestamp = timezone.now().strftime("%Y%m%d%H%M%S")
        self.transaction_id = f"PAY-{timestamp}-{self.id or 'NEW'}"

    def __str__(self):
        return f"Payment #{self.id} - {self.amount} FBU - {self.get_payment_status_display()}"


class TransactionHistory(BaseModel):
    TRANSACTION_TYPES = (
        ("deposit", "Deposit"),
        ("withdrawal", "Withdrawal"),
        ("payment", "Payment"),
        ("refund", "Refund"),
        ("blockchain", "Blockchain"),
    )

    wallet = models.ForeignKey(
        Wallet,
        related_name="transactions",
        on_delete=models.CASCADE,
        verbose_name="Wallet",
    )
    transaction_type = models.CharField(
        max_length=50,
        choices=TRANSACTION_TYPES,
        default="deposit",
        verbose_name="Transaction type",
    )
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, default=Decimal("0.00"), verbose_name="Amount"
    )
    date = models.DateTimeField(auto_now_add=True, verbose_name="Date")
    description = models.TextField(
        null=True,
        blank=True,
        default="No description provided",
        verbose_name="Description",
    )
    payment_reference = models.ForeignKey(
        Payment,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Payment reference",
    )
    blockchain_reference = models.ForeignKey(
        BlockchainTransaction,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="Blockchain reference",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Transaction history"
        verbose_name_plural = "Transaction histories"
        ordering = ["-date"]
