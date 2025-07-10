# Importation des variables nécessaires depuis base.py
from .base import DEBUG, ALLOWED_HOSTS, REDIS_HOST, REDIS_PORT

# Utilisation de ces variables dans les configurations
DEBUG = DEBUG
ALLOWED_HOSTS = ALLOWED_HOSTS

# Par exemple, configurer Redis avec les variables REDIS_HOST et REDIS_PORT
CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/1",
    }
}
