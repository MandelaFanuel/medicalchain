from django.db import models
from django.utils import timezone  # Assure-toi d'importer 'timezone' correctement


class BaseModel(models.Model):
    created_at = models.DateTimeField(default=timezone.now)

    def formatted_created_at(self):
        """Returns created_at in a readable format: '27 Feb 2025 - 13:45'."""
        return self.created_at.strftime("%d %b %Y - %H:%M")

    class Meta:
        abstract = True
