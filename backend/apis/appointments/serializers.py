from rest_framework import serializers
from backend.apps.appointments.models import Appointment
from backend.apps.availabilities.models import Availability
from rest_framework.exceptions import ValidationError

# from django.utils.timezone import make_aware


class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.SerializerMethodField()
    patient_name = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Appointment
        fields = [
            "id",
            "doctor",
            "doctor_name",
            "patient",
            "patient_name",
            "appointment_date",
            "formatted_date",
            "appointment_time",
            "appointment_reason",
            "status",
            "created_at",
            "is_paid",
        ]
        extra_kwargs = {"patient": {"read_only": True}}

    def get_doctor_name(self, obj):
        return obj.doctor.full_name if obj.doctor else None

    def get_patient_name(self, obj):
        return (
            f"{obj.patient.first_name} {obj.patient.last_name}" if obj.patient else None
        )

    def create(self, validated_data):
        request = self.context.get("request")
        if not request or not request.user:
            raise serializers.ValidationError({"error": "User context is required"})
        validated_data["patient"] = request.user
        return super().create(validated_data)

    def validate(self, data):
        doctor = data.get("doctor")
        appointment_date = data.get("appointment_date")
        appointment_time = data.get("appointment_time")

        # Vérification de la disponibilité du médecin à cette date et cette heure
        available_slots = Availability.objects.filter(
            doctor=doctor,
            availability_start_date__lte=appointment_date,
            availability_end_date__gte=appointment_date,
            start_time__lte=appointment_time,
            end_time__gte=appointment_time,
        )

        # Si le médecin n'est pas disponible à cette date et heure, levée d'une exception
        if not available_slots.exists():
            raise ValidationError(
                f"Le médecin n'est pas disponible à {appointment_time} pour le {appointment_date}.Priere de consulter ses disponibilites avant de prendre le prochain rendez-vous."
            )

        # Vérification des conflits avec les rendez-vous déjà existants
        if Appointment.objects.filter(
            doctor=doctor,
            appointment_date=appointment_date,
            appointment_time=appointment_time,
        ).exists():
            raise ValidationError(
                f"Le médecin a déjà un rendez-vous à {appointment_time} pour le {appointment_date}.Pouvez-vous resilier jusqu'a ses prochaines disponibilites svp?"
            )

        return data
