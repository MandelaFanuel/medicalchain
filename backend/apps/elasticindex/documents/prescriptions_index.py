from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import register_document
from backend.apps.prescriptions.models import Prescription
from backend.apps.users.models import CustomUser
from backend.apps.medications.models import Medication


@register_document
class PrescriptionDocument(Document):
    medication_name = fields.TextField(analyzer="snowball")
    dosage = fields.TextField()
    frequency = fields.TextField()
    user_email = fields.EmailField()

    class Index:
        name = "prescriptions"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = Prescription
        fields = ["medication", "dosage", "frequency", "user"]
        related_models = [CustomUser, Medication]
