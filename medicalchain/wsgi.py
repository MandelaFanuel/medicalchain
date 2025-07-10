import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE", "medicalchain.settings.dev"
)  # Changé à dev
application = get_wsgi_application()
