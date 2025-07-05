from celery import shared_task
from django.core.mail import send_mail
from django.utils import timezone
from apps.reminders.models import Reminder


@shared_task
def send_reminder_notifications():
    """
    Sends reminders to patients who have a dose to take in 5 minutes.
    This task should be executed regularly (e.g., every minute).
    """
    now = timezone.now()
    upcoming_reminders = Reminder.objects.filter(
        reminder_time__lte=now, dose_taken=False, notification_sent=False
    )

    for reminder in upcoming_reminders:
        user = reminder.user
        medication_name = reminder.dose.prescription.medication_name
        take_time = reminder.dose.taking_time.strftime(
            "%H:%M"
        )  # Corrected to use taking_time

        # Send email notification
        message = (
            f"Dear {user.username},\n\n"
            f"Reminder: In 5 minutes, you need to take your medication: {medication_name}.\n"
            f"Time: {take_time}.\n\n"
            "Please confirm after taking your dose.\n\n"
            "Best regards,\n"
            "MedicalChain Team"
        )

        send_mail(
            subject="Medication Reminder",
            message=message,
            from_email="no-reply@medicalchain.com",
            recipient_list=[user.email],
            fail_silently=False,
        )

        # Mark the reminder as sent
        reminder.notification_sent = True
        reminder.save()
