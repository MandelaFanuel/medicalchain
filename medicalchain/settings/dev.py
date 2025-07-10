from .base import *

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

# Configuration des fichiers statiques en développement
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"

# Configuration pour WhiteNoise
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"