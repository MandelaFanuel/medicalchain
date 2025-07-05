from django_elasticsearch_dsl import Document, Index, fields
from django_elasticsearch_dsl.registries import registry
from backend.apps.payments.models import Payment

# Définition de l'index Elasticsearch
PAYMENT_INDEX = Index("payments")


@registry.register_document
class PaymentDocument(Document):
    appointment_id = fields.IntegerField(attr="appointment_id")
    amount = fields.FloatField()
    payment_date = fields.DateField()
    payment_status = fields.TextField()
    payment_method = fields.TextField()

    class Index:
        name = "payments"

    class Django:
        model = Payment
