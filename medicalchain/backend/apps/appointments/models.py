from django.db import models
from backend.apps.users.models import CustomUser
from backend.apps.doctors.models import Doctor
from backend.apps.formats.base import BaseModel


class Appointment(BaseModel):

    class AppointmentStatus:
        PENDING = "pending"
        PAID = "paid"
        CONFIRMED = "confirmed"

        CHOICES = [
            (PENDING, "Pending"),
            (PAID, "Paid"),
            (CONFIRMED, "Confirmed"),
        ]

    patient = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="user_appointments"
    )

    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="appointments"
    )

    appointment_date = models.DateField()
    appointment_time = models.TimeField()

    appointment_reason = models.TextField()

    status = models.CharField(
        max_length=10,
        choices=AppointmentStatus.CHOICES,
        default=AppointmentStatus.PENDING,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Appointment with {self.doctor.full_name} by {self.patient.first_name} {self.patient.last_name}"
