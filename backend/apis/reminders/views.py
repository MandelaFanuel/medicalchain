from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.apps.reminders.models import Reminder
from .serializers import ReminderSerializer
from backend.apps.reminders.utils import create_reminders_for_prescription
from backend.apps.prescriptions.models import Prescription, Dose


# --------------------------------------------------------------
# ReminderViewSet - Gère les rappels pour les doses
# --------------------------------------------------------------
class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.select_related("dose", "user").all()
    serializer_class = ReminderSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        dose_id = request.data.get("dose")

        if not dose_id:
            return Response(
                {"error": "The 'dose' field is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            dose = Dose.objects.get(id=dose_id)
        except Dose.DoesNotExist:
            return Response(
                {"error": "Invalid dose ID."}, status=status.HTTP_404_NOT_FOUND
            )

        if dose.prescription.user != request.user:
            return Response(
                {"error": "This dose is not associated with your prescription."},
                status=status.HTTP_403_FORBIDDEN,
            )

        # Ensure the reminder is not duplicated
        if Reminder.objects.filter(dose=dose).exists():
            return Response(
                {"error": "A reminder already exists for this dose."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Create and return the reminder
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(dose=dose, user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# --------------------------------------------------------------
# CreatePrescriptionView - Crée une prescription et ses rappels
# --------------------------------------------------------------
class CreatePrescriptionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Créer une nouvelle prescription
        prescription = Prescription.objects.create(
            medication_name=request.data["medication_name"],
            user=request.user,
            start_date=request.data["start_date"],
            end_date=request.data["end_date"],
        )

        # Créer les doses associées à cette prescription
        doses = request.data.get("doses", [])
        for dose_data in doses:
            Dose.objects.create(
                prescription=prescription, reminder_time=dose_data["reminder_time"]
            )

        # Créer les rappels associés
        create_reminders_for_prescription(prescription)

        return Response({"message": "Prescription and reminders created successfully!"})
