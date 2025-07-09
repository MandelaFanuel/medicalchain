from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.prescriptions.models import Prescription
from apps.reminders.utils import create_reminders_for_prescription


@receiver(post_save, sender=Prescription)
def generate_reminders(sender, instance, created, **kwargs):
    if created:
        # Crée les rappels pour la prescription nouvellement ajoutée
        create_reminders_for_prescription(instance)
