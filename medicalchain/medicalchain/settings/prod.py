import os

# from pathlib import Path

# Import explicite depuis base.py (variables communes)
from .base import BASE_DIR

# Debug désactivé en prod
DEBUG = False

ALLOWED_HOSTS = ["*"]  # à ajuster en prod réelle (ex: ["mydomain.com"])

# Sécurité HTTPS / Cookies sécurisés
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Base de données pour prod (SQLite par défaut, à modifier si besoin)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

# Fichiers statiques et média (prod)
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Redis & cache (utilise variables d'environnement ou valeurs par défaut)
REDIS_HOST = os.getenv("REDIS_HOST", "redis")
REDIS_PORT = os.getenv("REDIS_PORT", "6379")

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/0",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# Celery en prod
CELERY_BROKER_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
CELERY_RESULT_BACKEND = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"

# Static files dirs - pas nécessaire en prod car STATIC_ROOT est utilisé pour collectstatic

# Middleware et apps sont hérités via base.py (tu peux étendre si besoin)

# Tu peux ajouter d'autres configurations spécifiques à la prod ici
