from rest_framework import serializers
from backend.apps.availabilities.models import Availability

# from django.utils.timezone import make_aware


class AvailabilitySerializer(serializers.ModelSerializer):
    doctor_name = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Availability
        fields = [
            "id",
            "doctor",
            "doctor_name",
            "availability_start_date",
            "availability_end_date",
            "start_time",
            "end_time",
            "patient",
            "formatted_date",
        ]

    def get_doctor_name(self, obj):
        return obj.doctor.full_name if obj.doctor else "Unknown Doctor"

    def create(self, validated_data):
        """Ensure the patient is the currently logged-in user"""
        patient = self.context["request"].user  # Current logged-in user
        validated_data["patient"] = patient
        return super().create(validated_data)

    def validate(self, data):
        if data["start_time"] >= data["end_time"]:
            raise serializers.ValidationError("Start time must be before end time.")
        doctor = data["doctor"]
        start_date = data["availability_start_date"]
        end_date = data["availability_end_date"]
        start_time = data["start_time"]
        end_time = data["end_time"]

        # Check for overlapping times for the same doctor
        if Availability.objects.filter(
            doctor=doctor,
            availability_start_date=start_date,
            availability_end_date=end_date,
            start_time=start_time,
            end_time=end_time,
        ).exists():
            raise serializers.ValidationError(
                f"The doctor already has availability at this exact time from {start_date} to {end_date}."
            )

        return data
