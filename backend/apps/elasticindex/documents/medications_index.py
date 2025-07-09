from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import register_document
from bakend.apps.medications.models import Medication


@register_document
class MedicationDocument(Document):
    name = fields.TextField(analyzer="snowball")
    description = fields.TextField(analyzer="snowball")
    dosage = fields.TextField()

    class Index:
        name = "medications"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = Medication
        fields = ["name", "description", "dosage"]
