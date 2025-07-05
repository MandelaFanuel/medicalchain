from django.core.management.base import BaseCommand
from elasticindex.documents.users_index import CustomUserDocument
from elasticindex.documents.doctor_index import DoctorDocument
from elasticindex.documents.appointments_index import AppointmentDocument
from elasticindex.documents.availabilities_index import AvailabilityDocument
from elasticindex.documents.medications_index import MedicationDocument
from elasticindex.documents.reminders_index import ReminderDocument
from elasticindex.documents.payments_index import PaymentDocument
from elasticindex.documents.prescriptions_index import PrescriptionDocument
from elasticindex.documents.notifications_index import NotificationDocument


class Command(BaseCommand):
    help = "Reindex all data in Elasticsearch"

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.WARNING("Reindexing Elasticsearch..."))

        # Création des nouveaux index
        CustomUserDocument().update_index()
        DoctorDocument().update_index()
        AppointmentDocument().update_index()
        AvailabilityDocument().update_index()
        ReminderDocument().update_index()
        MedicationDocument().update_index()
        PaymentDocument().update_index()
        PrescriptionDocument().update_index()
        NotificationDocument().update_index()

        self.stdout.write(self.style.SUCCESS("Successfully reindexed all data!"))
