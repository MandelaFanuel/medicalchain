from rest_framework import serializers
from backend.apps.reminders.models import Reminder
from backend.apps.prescriptions.models import Prescription

# from django.utils.timezone import make_aware


class ReminderSerializer(serializers.ModelSerializer):
    medication_name = serializers.ReadOnlyField(
        source="dose.prescription.medication_name"
    )

    formatted_payment_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Reminder
        fields = [
            "id",
            "user",
            "dose",
            "reminder_time",
            "dose_taken",
            "notification_sent",
            "medication_name",
            "formatted_date",
        ]

    def validate(self, data):
        """
        Ensure the dose belongs to a prescription linked to the user.
        """
        user = data.get("user")
        dose = data.get("dose")

        if not Prescription.objects.filter(user=user, doses=dose).exists():
            raise serializers.ValidationError(
                {
                    "dose": "This dose is not associated with any prescription for this user."
                }
            )

        return data
