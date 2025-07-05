from django_elasticsearch_dsl import Document, Index, fields
from django_elasticsearch_dsl.registries import registry
from backend.apps.reminders.models import Reminder

# Définition de l'index Elasticsearch
PRESCRIPTION_INDEX = Index("reminders")


@registry.register_document
class ReminderDocument(Document):
    user_id = fields.IntegerField(attr="user_id")
    dose_id = fields.IntegerField(attr="dose_id")
    medication_name = fields.TextField(
        attr="medication_name"
    )  # Accès direct via @property
    reminder_time = fields.DateField()
    dose_taken = fields.BooleanField()
    notification_sent = fields.BooleanField()

    class Index:
        name = "reminders"

    class Django:
        model = Reminder
