import os
import dj_database_url
from .base import *

# Sécurité
DEBUG = False
SECRET_KEY = os.getenv("SECRET_KEY")  # Doit être défini dans Render !
ALLOWED_HOSTS = ["medicalchain-prod.onrender.com", "localhost"]

# HTTPS
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Base de données (PostgreSQL obligatoire sur Render)
DATABASES = {
    "default": dj_database_url.config(
        default=os.getenv("DATABASE_URL"),
        conn_max_age=600,
        ssl_require=True
    )
}

# Static files
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

# Media files (configuration S3 recommandée)
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")  # Temporaire, à remplacer par S3

# Redis (si utilisé)
REDIS_URL = os.getenv("REDIS_URL")
if REDIS_URL:
    CACHES = {
        "default": {
            "BACKEND": "django_redis.cache.RedisCache",
            "LOCATION": REDIS_URL,
            "OPTIONS": {"CLIENT_CLASS": "django_redis.client.DefaultClient"},
        }
    }
    CELERY_BROKER_URL = REDIS_URL
    CELERY_RESULT_BACKEND = REDIS_URL

# Configuration pour WhiteNoise
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"