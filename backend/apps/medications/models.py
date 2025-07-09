from django.db import models
from backend.apps.formats.base import BaseModel


class Medication(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    dosage = models.CharField(max_length=255)
    arrival_date = models.DateField()
    expire_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
