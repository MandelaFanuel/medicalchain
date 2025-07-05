from rest_framework import serializers
from backend.apps.medications.models import Medication

# from django.utils.timezone import make_aware


class MedicationSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Medication
        fields = [
            "id",
            "name",
            "description",
            "dosage",
            "arrival_date",
            "expire_date",
            "formatted_date",
        ]
