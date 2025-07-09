from django.db import models
from django.utils import timezone
from backend.apps.users.models import CustomUser
from backend.apps.prescriptions.models import Dose
from backend.apps.formats.base import BaseModel


class Reminder(BaseModel):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    dose = models.ForeignKey(Dose, on_delete=models.CASCADE)
    reminder_time = models.DateTimeField()
    dose_taken = models.BooleanField(default=False)
    notification_sent = models.BooleanField(default=False)

    def __str__(self):
        return f"Reminder for {self.user} - {self.dose.prescription.medication_name} at {self.reminder_time}"

    def is_past_due(self):
        """Checks if the reminder time has passed without the dose being taken."""
        return timezone.now() > self.reminder_time and not self.dose_taken

    @property
    def medication_name(self):
        return self.dose.prescription.medication_name
