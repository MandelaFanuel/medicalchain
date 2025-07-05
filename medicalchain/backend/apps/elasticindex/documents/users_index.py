from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import register_document
from backend.apps.users.models import CustomUser


@register_document
class CustomUserDocument(Document):
    email = fields.EmailField()
    first_name = fields.TextField(analyzer="snowball")
    last_name = fields.TextField(analyzer="snowball")
    current_function = fields.TextField(analyzer="snowball")

    class Index:
        # Nom de l'index Elasticsearch
        name = "users"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = CustomUser  # Le modèle Django auquel cet index correspond
        fields = ["email", "first_name", "last_name", "current_function"]
