from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab


# Définit l'environnement de configuration pour Celery
os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE", "medicalchain.settings.base"
)  # Utilise 'base' comme tu l'as mentionné

app = Celery("medicalchain")

# Charge la configuration de Celery à partir du fichier settings.py (section Celery dans base.py)
app.config_from_object("django.conf:settings", namespace="CELERY")

# Charge les tâches dans tous les modules de tâches de l'application Django
app.autodiscover_tasks()

# Planification de la tâche via Celery Beat
app.conf.beat_schedule = {
    "send_reminder_notifications_every_minute": {
        "task": "apps.reminders.tasks.send_reminder_notifications",
        "schedule": crontab(minute="*"),  # Exécuter chaque minute
    },
}


@app.task(bind=True)
def debug_task(self):
    print("Request: {0!r}".format(self.request))
