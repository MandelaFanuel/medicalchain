from django.db import models
from django.core.exceptions import ValidationError
from backend.apps.users.models import CustomUser
from backend.apps.doctors.models import Doctor
from backend.apps.formats.base import BaseModel


class Availability(BaseModel):
    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="availabilities"
    )
    availability_start_date = models.DateField(default=None)
    availability_end_date = models.DateField(default=None)
    start_time = models.TimeField()
    end_time = models.TimeField()
    patient = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="user_availabilities",
    )

    def clean(self):
        if self.start_time >= self.end_time:
            raise ValidationError("End time must be later than start time.")

        if Availability.objects.filter(
            doctor=self.doctor,
            availability_start_date=self.availability_start_date,
            availability_end_date=self.availability_end_date,
            start_time=self.start_time,
            end_time=self.end_time,
        ).exists():
            raise ValidationError(
                f"The doctor already has availability at this exact time on {self.availability_start_date}."
            )

    def __str__(self):
        return f"{self.doctor.user.first_name} {self.doctor.user.last_name} - {self.availability_start_date} to {self.availability_end_date} ({self.start_time} to {self.end_time})"
