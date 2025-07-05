from django.utils import timezone
from backend.apps.reminders.models import Reminder


def create_reminders_for_prescription(prescription):
    """
    Creates reminders for each dose in the prescription.
    The reminder is scheduled 5 minutes before the dose time.
    """
    for dose in prescription.doses.all():
        reminder_time = dose.taking_time - timezone.timedelta(minutes=5)
        Reminder.objects.create(
            user=prescription.user,
            dose=dose,
            reminder_time=reminder_time,
            dose_taken=False,
            notification_sent=False,
        )
