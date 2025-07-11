# Generated by Django 5.1.5 on 2025-04-15 09:13

import django.db.models.deletion
from decimal import Decimal
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("appointments", "0003_initial"),
        ("payments", "0019_alter_transactionhistory_appointment_reason"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="payment",
            options={
                "ordering": ["-payment_date"],
                "verbose_name": "Payment",
                "verbose_name_plural": "Payments",
            },
        ),
        migrations.AlterModelOptions(
            name="transactionhistory",
            options={
                "ordering": ["-date"],
                "verbose_name": "Transaction history",
                "verbose_name_plural": "Transaction histories",
            },
        ),
        migrations.AlterModelOptions(
            name="wallet",
            options={
                "ordering": ["-created_at"],
                "verbose_name": "Wallet",
                "verbose_name_plural": "Wallets",
            },
        ),
        migrations.RemoveField(
            model_name="transactionhistory",
            name="appointment_reason",
        ),
        migrations.RemoveField(
            model_name="transactionhistory",
            name="paid_by",
        ),
        migrations.AddField(
            model_name="payment",
            name="notes",
            field=models.TextField(
                blank=True, default="No notes provided", null=True, verbose_name="Notes"
            ),
        ),
        migrations.AddField(
            model_name="payment",
            name="payment_category",
            field=models.CharField(
                choices=[
                    ("mobile", "Mobile Money"),
                    ("crypto", "Cryptocurrency"),
                    ("card", "Credit/Debit Card"),
                    ("wallet", "Medichain Wallet"),
                ],
                default="wallet",
                max_length=20,
                verbose_name="Payment category",
            ),
        ),
        migrations.AddField(
            model_name="payment",
            name="transaction_id",
            field=models.CharField(
                blank=True,
                default="TXN-0000",
                max_length=100,
                null=True,
                verbose_name="Transaction ID",
            ),
        ),
        migrations.AddField(
            model_name="payment",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name="transactionhistory",
            name="appointment",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="appointments.appointment",
                verbose_name="Appointment",
            ),
        ),
        migrations.AddField(
            model_name="transactionhistory",
            name="payment_reference",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="payments.payment",
                verbose_name="Payment reference",
            ),
        ),
        migrations.AddField(
            model_name="transactionhistory",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name="transactionhistory",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
                verbose_name="User",
            ),
        ),
        migrations.AddField(
            model_name="wallet",
            name="updated_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="payment",
            name="amount",
            field=models.DecimalField(
                decimal_places=2,
                default=Decimal("50000.00"),
                max_digits=10,
                verbose_name="Amount",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="appointment",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="payment",
                to="appointments.appointment",
                verbose_name="Appointment",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="payment",
            name="paid_by",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
                verbose_name="Paid by",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="payment_date",
            field=models.DateTimeField(auto_now_add=True, verbose_name="Payment date"),
        ),
        migrations.AlterField(
            model_name="payment",
            name="payment_method",
            field=models.CharField(
                default="wallet", max_length=20, verbose_name="Payment method"
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="payment_status",
            field=models.CharField(
                choices=[
                    ("pending", "Pending"),
                    ("completed", "Completed"),
                    ("failed", "Failed"),
                    ("refunded", "Refunded"),
                ],
                default="pending",
                max_length=20,
                verbose_name="Payment status",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="transaction_type",
            field=models.CharField(
                choices=[
                    ("deposit", "Deposit"),
                    ("appointment_payment", "Appointment payment"),
                    ("refund", "Refund"),
                ],
                default="appointment_payment",
                max_length=50,
                verbose_name="Transaction type",
            ),
        ),
        migrations.AlterField(
            model_name="payment",
            name="wallet",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="payments",
                to="payments.wallet",
                verbose_name="Wallet",
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="amount",
            field=models.DecimalField(
                decimal_places=2,
                default=Decimal("0.00"),
                max_digits=10,
                verbose_name="Amount",
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="date",
            field=models.DateTimeField(auto_now_add=True, verbose_name="Date"),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="day_of_week",
            field=models.CharField(
                default="Monday",
                editable=False,
                max_length=50,
                verbose_name="Day of week",
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="description",
            field=models.TextField(
                blank=True,
                default="No description provided",
                null=True,
                verbose_name="Description",
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="time",
            field=models.CharField(
                default="00:00", editable=False, max_length=50, verbose_name="Time"
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="transaction_type",
            field=models.CharField(
                choices=[
                    ("deposit", "Deposit"),
                    ("withdrawal", "Withdrawal"),
                    ("appointment_payment", "Appointment payment"),
                    ("refund", "Refund"),
                ],
                default="deposit",
                max_length=50,
                verbose_name="Transaction type",
            ),
        ),
        migrations.AlterField(
            model_name="transactionhistory",
            name="wallet",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="transactions",
                to="payments.wallet",
                verbose_name="Wallet",
            ),
        ),
        migrations.AlterField(
            model_name="wallet",
            name="balance",
            field=models.DecimalField(
                decimal_places=2,
                default=Decimal("0.00"),
                max_digits=15,
                verbose_name="Balance",
            ),
        ),
        migrations.AlterField(
            model_name="wallet",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="wallet",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="wallet",
                to=settings.AUTH_USER_MODEL,
                verbose_name="User",
            ),
        ),
        migrations.AddIndex(
            model_name="payment",
            index=models.Index(
                fields=["payment_status"], name="payments_pa_payment_8ac9aa_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="payment",
            index=models.Index(
                fields=["payment_category"], name="payments_pa_payment_114518_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="transactionhistory",
            index=models.Index(
                fields=["transaction_type"], name="payments_tr_transac_e177aa_idx"
            ),
        ),
        migrations.AddIndex(
            model_name="transactionhistory",
            index=models.Index(fields=["date"], name="payments_tr_date_626541_idx"),
        ),
    ]
