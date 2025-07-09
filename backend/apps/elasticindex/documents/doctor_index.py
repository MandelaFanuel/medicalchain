from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import register_document
from backend.apps.doctors.models import Doctor
from backend.apps.users.models import CustomUser


@register_document
class DoctorDocument(Document):
    full_name = fields.TextField(analyzer="snowball")
    specialty = fields.TextField()
    hospital = fields.TextField()

    class Index:
        name = "doctors"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = Doctor
        fields = ["specialty", "hospital"]
        related_models = [CustomUser]
