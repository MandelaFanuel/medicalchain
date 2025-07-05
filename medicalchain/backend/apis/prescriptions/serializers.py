from rest_framework import serializers
from backend.apps.prescriptions.models import Prescription, Dose
from backend.apps.users.models import CustomUser
from backend.apps.medications.models import Medication
from backend.apis.users.serializers import CustomUserSerializer

# from django.utils.timezone import make_aware


class DoseSerializer(serializers.ModelSerializer):
    taking_time = serializers.TimeField(format="%H:%M:%S")  # Forcer le format attendu
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Dose
        fields = [
            "id",
            "prescription",
            "taking_time",
            "quantity",
            "is_valid",
            "is_missed",
            "formatted_date",
        ]

    def validate_taking_time(self, value):
        """S'assurer que `taking_time` est bien une chaîne"""
        if isinstance(value, str):
            return value
        return value.strftime("%H:%M:%S")

    def create(self, validated_data):
        return Dose.objects.create(**validated_data)


class PrescriptionSerializer(serializers.ModelSerializer):
    doses = DoseSerializer(many=True, read_only=True)
    patient = CustomUserSerializer(source="user", read_only=True)
    medication_name = serializers.CharField(source="medication.name", read_only=True)
    medication = serializers.PrimaryKeyRelatedField(queryset=Medication.objects.all())

    user = serializers.PrimaryKeyRelatedField(
        queryset=CustomUser.objects.exclude(current_function="doctor").filter(
            is_staff=False, is_superuser=False
        )
    )
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Prescription
        fields = [
            "id",
            "user",
            "patient",
            "medication",
            "medication_name",
            "dosage",
            "frequency",
            "doses",
            "created_at",
            "formatted_date",
        ]

    def create(self, validated_data):
        patient = validated_data.get("user")

        # Vérification supplémentaire côté backend
        if (
            patient.current_function == "doctor"
            or patient.is_staff
            or patient.is_superuser
        ):
            raise serializers.ValidationError(
                "Only patients can receive prescriptions."
            )

        prescription = Prescription.objects.create(**validated_data)
        return prescription
