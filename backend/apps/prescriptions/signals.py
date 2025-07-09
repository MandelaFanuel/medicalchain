from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.prescriptions.models import Prescription, Dose
from apps.notifications.models import Notification
from django.utils.timezone import now
from apps.users.models import CustomUser


@receiver(post_save, sender=Prescription)
def notify_patient_on_new_prescription(sender, instance, created, **kwargs):
    if created:

        print(f"Notification creation triggered for {instance}")

        # Obtenir l'utilisateur (patient)
        patient = instance.user
        medication_name = instance.medication.name
        sender_user = instance.user

        # Créer la notification pour le patient
        Notification.objects.create(
            recipient=patient,
            sender=sender_user,
            title=f"New Prescription for {patient.username}!",
            message=f"Dear {patient.first_name} {patient.last_name}, a new prescription for {medication_name} has been added to your account.",
            created_at=now(),
            is_read=False,
        )


# ================================================================================================================


@receiver(post_save, sender=Dose)
def send_notification_to_doctor(sender, instance, created, **kwargs):
    """
    Envoie une notification au médecin chaque fois qu'une dose est validée par un patient.
    """
    # Vérifie si la dose a été validée et n'est pas une création (post_save est aussi déclenché lors de la création)
    if instance.is_valid and not created:
        prescription = instance.prescription
        patient = prescription.user
        doctor = CustomUser.objects.get(id=prescription.user_id)

        # Crée la notification pour le médecin
        Notification.objects.create(
            recipient=doctor,
            sender=patient,
            title="Dose Validée",
            message=f"Le patient {patient.first_name} {patient.last_name} a validé une dose de {prescription.medication_name} à {instance.taking_time.strftime('%H:%M')}.",
            is_read=False,
        )


# ================================================================================================================
