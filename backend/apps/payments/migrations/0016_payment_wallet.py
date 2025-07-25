# Generated by Django 5.1.5 on 2025-03-09 12:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("payments", "0015_transactionhistory_day_of_week_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="payment",
            name="wallet",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="payments",
                to="payments.wallet",
            ),
        ),
    ]
