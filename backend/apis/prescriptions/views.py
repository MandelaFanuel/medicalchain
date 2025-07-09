from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from backend.apps.prescriptions.models import Prescription, Dose
from .serializers import PrescriptionSerializer, DoseSerializer
from backend.apps.medications.models import Medication
from backend.apis.medications.serializers import MedicationSerializer
from backend.apps.reminders.utils import create_reminders_for_prescription
from django.views.decorators.cache import cache_page
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from backend.apps.reminders.models import Reminder
from backend.apps.users.models import CustomUser
from datetime import datetime
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.utils.decorators import method_decorator
from backend.apps.notifications.models import Notification


# --------------------------------------------------------------
# PrescriptionViewSet - Gère les prescriptions
# --------------------------------------------------------------


class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.prefetch_related("doses").select_related(
        "user", "medication"
    )
    serializer_class = PrescriptionSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        """
        Méthode personnalisée pour créer une prescription.
        Vérifie que l'utilisateur est un médecin et que le patient est valide.
        Crée les rappels pour la prescription et envoie des notifications.
        """
        user = self.request.user

        # Vérification si l'utilisateur est un médecin
        if user.current_function != "doctor":
            raise serializers.ValidationError("Only doctors can prescribe medication.")

        # Récupération du patient depuis la demande

        patient_id = self.request.data.get("user")
        if not patient_id:
            raise serializers.ValidationError("A valid patient must be specified.")

        patient = get_object_or_404(CustomUser, id=patient_id)

        # Vérification que le patient n'est pas un médecin

        if patient.current_function == "doctor":
            raise serializers.ValidationError(
                "Cannot prescribe medication to a doctor."
            )

        # Sauvegarde de la prescription
        prescription = serializer.save()

        # Créer des rappels pour la prescription
        create_reminders_for_prescription(prescription)

        # Créer une notification pour le patient
        Notification.objects.create(
            recipient=patient,
            sender=user,  # L'utilisateur (médecin) est l'expéditeur
            title="New Prescription",
            message=f"Dear {patient.first_name}, you have a new prescription for {prescription.medication.name}.",
            is_read=False,
        )

        # Créer une notification pour le médecin
        Notification.objects.create(
            recipient=user,  # Le médecin reçoit aussi une confirmation
            sender=user,
            title="Prescription Created",
            message=f"Prescription for {patient.first_name} {patient.last_name} has been created.",
            is_read=False,
        )

        return prescription

    @method_decorator(cache_page(60 * 15))  # Cache la réponse pendant 15 minutes
    def list(self, request, *args, **kwargs):
        """
                Liste les prescriptions avec un cache de 15 minutes.
        >>>>>>> Stashed changes
        """
        return super().list(request, *args, **kwargs)


# --------------------------------------------------------------
# CreatePrescriptionView - Crée une prescription via une API
# --------------------------------------------------------------


class CreatePrescriptionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        data = request.data

        required_fields = ["medication_name", "start_date", "end_date"]
        for field in required_fields:
            if field not in data:
                return Response({"error": f"{field} is required."}, status=400)

        # Créer la prescription sans les doses
        prescription = Prescription.objects.create(
            medication_name=data["medication_name"],
            user=user,
            start_date=data["start_date"],
            end_date=data["end_date"],
        )

        create_reminders_for_prescription(prescription)

        return Response({"message": "Prescription created successfully!"}, status=201)


# --------------------------------------------------------------
# DoseViewSet - Gère les doses associées aux prescriptions
# --------------------------------------------------------------


class DoseViewSet(viewsets.ModelViewSet):
    queryset = Dose.objects.select_related("prescription")
    serializer_class = DoseSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        prescription_id = request.data.get("prescription")
        if not prescription_id:
            return Response(
                {"error": "A prescription ID is required to create a dose."}, status=400
            )

        prescription = get_object_or_404(Prescription, id=prescription_id)

        # Récupérer les données de la dose
        dose_time_str = request.data.get("taking_time")
        quantity = request.data.get("quantity")

        # Vérifier que les données nécessaires sont présentes
        if not dose_time_str or quantity is None:
            return Response(
                {"error": "Dose time and quantity are required."}, status=400
            )

        # Vérifier le format de l'heure
        try:
            dose_time = datetime.strptime(dose_time_str, "%H:%M").time()
        except ValueError:
            return Response(
                {"error": "Invalid time format. Expected 'HH:MM'."}, status=400
            )

        # Vérifier si une dose existe déjà à cette heure
        if Dose.objects.filter(
            prescription=prescription, taking_time=dose_time
        ).exists():
            return Response(
                {
                    "error": f"A dose already exists for this prescription at {dose_time_str}."
                },
                status=400,
            )

        # Créer la dose
        dose = Dose.objects.create(
            prescription=prescription,
            taking_time=dose_time,
            quantity=quantity,
            is_valid=True,
            is_missed=False,
        )

        # Créer un rappel pour la dose
        Reminder.objects.create(
            user=prescription.user,
            dose=dose,
            reminder_time=dose_time,
            dose_taken=False,
            notification_sent=False,
        )

        return Response(
            {"message": "Dose and reminder created successfully!"}, status=201
        )

    @action(detail=False, methods=["get"], url_path="medications")
    @method_decorator(
        cache_page(60 * 15)
    )  # Cache la liste des médicaments pendant 15 minutes
    def list_medications(self, request):
        """
        Endpoint pour récupérer tous les médicaments.
        """
        medications = Medication.objects.all()
        serializer = MedicationSerializer(medications, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        Reminder.objects.filter(dose=instance).delete()

        return super().destroy(request, *args, **kwargs)

    @staticmethod
    def send_notification_to_user(user_id, message):
        channel_layer = get_channel_layer()
        if not channel_layer:
            return

        group_name = f"user_{user_id}"

        async_to_sync(channel_layer.group_send)(
            group_name, {"type": "send_notification", "message": message}
        )
