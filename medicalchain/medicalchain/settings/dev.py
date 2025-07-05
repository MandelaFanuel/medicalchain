# Import explicite des variables utiles depuis base.py
from .base import (
    BASE_DIR,
)

# Paramètres spécifiques au développement

DEBUG = True
ALLOWED_HOSTS = ["*"]

# Base de données pour développement - SQLite (redéfinition pour clarté)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Celery en dev (exemple)
CELERY_BROKER_URL = "redis://redis:6379/0"
CELERY_RESULT_BACKEND = "redis://redis:6379/0"

# Le reste des paramètres (middleware, apps, etc.) reste importé via base.py

# Tu peux rajouter d'autres réglages dev ici si besoin
