# Generated by Django 5.1.5 on 2025-02-27 14:16

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reminders", "0002_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="reminder",
            name="created_at",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
