from django.db import models
from backend.apps.users.models import CustomUser
from backend.apps.medications.models import Medication
from backend.apps.notifications.models import Notification
import datetime
import pytz
from backend.apps.formats.base import BaseModel


class Prescription(BaseModel):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="prescriptions"
    )
    medication = models.ForeignKey(Medication, on_delete=models.CASCADE)
    dosage = models.CharField(max_length=255)
    frequency = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Prescription"
        verbose_name_plural = "Prescriptions"

    def __str__(self):
        return (
            f"Prescription {self.id} - {self.medication.name} for {self.user.full_name}"
        )


class Dose(BaseModel):
    prescription = models.ForeignKey(
        "prescriptions.Prescription", on_delete=models.CASCADE, related_name="doses"
    )
    taking_time = models.TimeField()
    quantity = models.FloatField()
    is_valid = models.BooleanField(default=False)
    is_missed = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Dose"
        verbose_name_plural = "Doses"

    def __str__(self):
        return f"Dose {self.id} for Prescription {self.prescription.id} at {self.taking_time}"

    def save(self, *args, **kwargs):
        now = datetime.datetime.now(tz=pytz.UTC)

        today_taking_datetime = datetime.datetime.combine(
            now.date(), self.taking_time, tzinfo=pytz.UTC
        )

        # Si l'heure de la prise est déjà passée, marquer la dose comme manquée
        if today_taking_datetime < now:
            self.is_missed = True

        # Sauvegarder normalement la dose
        super().save(*args, **kwargs)

        # Si la dose a été validée, envoyer une notification au médecin
        if self.is_valid:
            prescription = self.prescription
            patient = prescription.user
            doctor = CustomUser.objects.get(id=prescription.user_id)

            # Créer une notification pour le médecin
            Notification.objects.create(
                recipient=doctor,
                sender=patient,
                title="Dose Validée",
                message=f"Le patient {patient.first_name} {patient.last_name} a validé une dose de {prescription.medication.name} à {self.taking_time.strftime('%H:%M')}.",
                is_read=False,
            )
