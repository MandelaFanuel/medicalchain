from django_elasticsearch_dsl import Document, Index, fields
from django_elasticsearch_dsl.registries import registry
from backend.apps.availabilities.models import (
    Availability,
)  # Importation du modèle Availability

availability_index = Index("availabilities")
availability_index.settings(number_of_shards=1, number_of_replicas=0)


@registry.register_document
class AvailabilityDocument(Document):
    doctor = fields.ObjectField(
        properties={
            "id": fields.IntegerField(),
            "first_name": fields.TextField(),
            "last_name": fields.TextField(),
        }
    )
    availability_start_date = fields.DateField()
    availability_end_date = fields.DateField()
    start_time = fields.TextField()
    end_time = fields.TextField()
    patient = fields.ObjectField(
        properties={
            "id": fields.IntegerField(),
            "first_name": fields.TextField(),
            "last_name": fields.TextField(),
        }
    )

    class Index:
        name = "availabilities"  # Nom de l'index Elasticsearch

    class Django:
        model = Availability  # Modèle Django à indexer
        fields = ["id"]
