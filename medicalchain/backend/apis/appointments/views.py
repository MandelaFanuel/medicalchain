from rest_framework import generics, viewsets, permissions
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework.views import APIView
from backend.apps.availabilities.models import Availability
from backend.apps.appointments.models import Appointment
from django.core.cache import cache
from .serializers import AppointmentSerializer
from rest_framework.permissions import IsAuthenticated


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        cached_appointments = cache.get("appointments_all")
        if cached_appointments:
            return cached_appointments

        appointments = Appointment.objects.all()
        cache.set("appointments_all", appointments, timeout=60 * 15)
        return appointments

    def perform_create(self, serializer):
        patient = self.request.user
        serializer.save(patient=patient)


class AppointmentCreateView(generics.CreateAPIView):
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        patient = self.request.user
        doctor = serializer.validated_data["doctor"]
        appointment_date = serializer.validated_data["appointment_date"]
        appointment_time = serializer.validated_data["appointment_time"]

        if patient.current_function == "doctor":
            raise ValidationError("Only patients can book appointments.")

        available_slots = Availability.objects.filter(
            doctor=doctor,
            availability_start_date__lte=appointment_date,
            availability_end_date__gte=appointment_date,
            start_time__lte=appointment_time,
            end_time__gte=appointment_time,
        )

        if not available_slots.exists():
            raise ValidationError("The doctor is not available at this time.")

        appointment = serializer.save(patient=patient, status="pending")
        cache.delete("appointments_all")
        return appointment


class AppointmentUpdateView(generics.UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        appointment = self.get_object()

        if appointment.status == "confirmed":
            raise ValidationError("This appointment cannot be modified once confirmed.")

        if self.request.user != appointment.patient and not self.request.user.is_staff:
            raise ValidationError(
                "You do not have permission to modify this appointment."
            )

        cache.delete("appointments_all")
        serializer.save()


class AppointmentDeleteView(generics.DestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_destroy(self, instance):
        if instance.status == "confirmed":
            raise ValidationError("This appointment cannot be deleted once confirmed.")

        if self.request.user != instance.patient and not self.request.user.is_staff:
            raise ValidationError(
                "You do not have permission to delete this appointment."
            )

        cache.delete("appointments_all")
        instance.delete()


class AppointmentListView(generics.ListAPIView):
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        cached_appointments = cache.get("appointments_all")
        if cached_appointments:
            return cached_appointments

        appointments = Appointment.objects.all()
        cache.set("appointments_all", appointments, timeout=60 * 15)
        return appointments


class AppointmentPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, appointment_id):
        try:
            appointment = Appointment.objects.get(
                id=appointment_id, patient=request.user
            )

            if appointment.status != "pending":
                return Response(
                    {"error": "This appointment cannot be paid anymore."},
                    status=HTTP_400_BAD_REQUEST,
                )

            appointment.status = "paid"
            appointment.is_paid = True
            appointment.save()

            cache.delete("appointments_all")

            return Response(
                {
                    "message": "Payment successful. Your appointment is now marked as paid."
                },
                status=HTTP_200_OK,
            )
        except Appointment.DoesNotExist:
            return Response(
                {"error": "Appointment not found or you don't have permission."},
                status=HTTP_400_BAD_REQUEST,
            )
