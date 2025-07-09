from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from backend.apps.doctors.models import Doctor
from backend.apps.appointments.models import Appointment
from backend.apps.users.models import CustomUser


@registry.register_document
class AppointmentDocument(Document):
    patient_email = fields.EmailField()
    doctor_name = fields.TextField(analyzer="snowball")
    appointment_date = fields.DateField()
    appointment_time = fields.DateField()
    status = fields.KeywordField()

    class Index:
        name = "appointments"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = Appointment
        fields = ["patient", "doctor", "appointment_date", "appointment_time", "status"]
        related_models = [CustomUser, Doctor]
