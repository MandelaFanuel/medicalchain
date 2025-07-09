from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import register_document
from backend.apps.notifications.models import Notification
from backend.apps.users.models import CustomUser


@register_document
class NotificationDocument(Document):
    title = fields.TextField(analyzer="snowball")
    message = fields.TextField(analyzer="snowball")
    recipient_email = fields.EmailField()
    sender_email = fields.EmailField()
    created_at = fields.DateField()

    class Index:
        name = "notifications"
        settings = {"number_of_shards": 1, "number_of_replicas": 0}

    class Django:
        model = Notification
        fields = ["title", "message", "recipient", "sender", "created_at"]
        related_models = [CustomUser]
