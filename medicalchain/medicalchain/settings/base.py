import os
from pathlib import Path
from dotenv import load_dotenv
from datetime import timedelta
from celery.schedules import crontab
import json
from django.core.exceptions import ImproperlyConfigured

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

# Chemin racine du projet (3 niveaux au-dessus de ce fichier)
BASE_DIR = Path(__file__).resolve().parent.parent.parent


def get_env_variable(var_name, default=None):
    """Récupère une variable d'environnement ou une valeur par défaut."""
    return os.getenv(var_name, default)


# Sécurité
SECRET_KEY = get_env_variable("SECRET_KEY", "default-secret-key")
DEBUG = get_env_variable("DEBUG", "True") == "True"
ALLOWED_HOSTS = get_env_variable("ALLOWED_HOSTS", "*").split(",")

# Applications installées
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "silk",
    # Apps tierces
    "rest_framework",
    "rest_framework_simplejwt",
    "rest_framework.authtoken",
    "drf_spectacular",
    "channels",
    "django_celery_beat",
    "django_celery_results",
    "django_filters",
    "corsheaders",
    # Apps locales
    "backend.apps.users",
    "backend.apps.reminders",
    "backend.apps.prescriptions",
    "backend.apps.notifications",
    "backend.apps.medications",
    "backend.apps.appointments",
    "backend.apps.payments",
    "backend.apps.doctors",
    "backend.apps.availabilities",
    "backend.apps.elasticindex",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",  # Ajouté pour les fichiers statiques
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "silk.middleware.SilkyMiddleware",
]

ROOT_URLCONF = "medicalchain.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "medicalchain.wsgi.application"
ASGI_APPLICATION = "medicalchain.asgi.application"

# Base de données (SQLite par défaut)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Configuration Redis
REDIS_HOST = get_env_variable("REDIS_HOST", "localhost")
REDIS_PORT = get_env_variable("REDIS_PORT", "6379")

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    }
}

# Configuration Celery
CELERY_BROKER_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
CELERY_RESULT_BACKEND = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
CELERY_ACCEPT_CONTENT = ["json"]
CELERY_TASK_SERIALIZER = "json"

CELERY_BEAT_SCHEDULE = {
    "send_reminder_notifications_every_minute": {
        "task": "apps.reminders.tasks.send_reminder_notifications",
        "schedule": crontab(minute="*"),
    },
}

# Channels (WebSocket)
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [(REDIS_HOST, int(REDIS_PORT))],
        },
    },
}

# CORS
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
]
CORS_ALLOW_CREDENTIALS = True

# Fichiers statiques & média
STATIC_URL = "/static/"
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"  # Ajouté pour la collecte des fichiers statiques
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
DEFAULT_PROFILE_IMAGE = os.path.join(
    MEDIA_ROOT, "profile_images", "default_profile.png"
)

# Configuration pour WhiteNoise
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# Validation mots de passe
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# Utilisateur personnalisé
AUTH_USER_MODEL = "users.CustomUser"
AUTHENTICATION_BACKENDS = ["django.contrib.auth.backends.ModelBackend"]

# REST Framework
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_FILTER_BACKENDS": ("django_filters.rest_framework.DjangoFilterBackend",),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 10,
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}

# Simple JWT
SIMPLE_JWT = {
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "AUTH_HEADER_TYPES": ("Bearer",),
}

# Internationalisation
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Uploads
FILE_UPLOAD_PERMISSIONS = 0o644
FILE_UPLOAD_MAX_MEMORY_SIZE = 2 * 1024 * 1024  # 2MB
DATA_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024  # 10MB

# Blockchain Configuration - récupération robuste ABI

BLOCKCHAIN_NETWORK = get_env_variable("BLOCKCHAIN_NETWORK", "sepolia")
INFURA_API_KEY = get_env_variable("INFURA_API_KEY", "")
ETHERSCAN_API_KEY = get_env_variable("ETHERSCAN_API_KEY", "")
CONTRACT_ADDRESS = get_env_variable("CONTRACT_ADDRESS", "")
DEPLOYER_PRIVATE_KEY = get_env_variable("DEPLOYER_PRIVATE_KEY", "")

try:
    ABI_PATH = (
        BASE_DIR
        / "backend"
        / "smart-contracts"
        / "artifacts"
        / "contracts"
        / "MedicalChainPayments.sol"
        / "MedicalChainPayments.json"
    )
    if not ABI_PATH.exists():
        ABI_PATH = (
            BASE_DIR / "backend" / "smart-contracts" / "contracts" / "MedicalChain.json"
        )

    with open(ABI_PATH) as f:
        contract_data = json.load(f)
        if isinstance(contract_data, list):
            CONTRACT_ABI = contract_data[0]["abi"]
        elif "abi" in contract_data:
            CONTRACT_ABI = contract_data["abi"]
        elif (
            "compilerOutput" in contract_data
            and "abi" in contract_data["compilerOutput"]
        ):
            CONTRACT_ABI = contract_data["compilerOutput"]["abi"]
        else:
            raise ImproperlyConfigured("ABI format not recognized in contract file")

except FileNotFoundError:
    raise ImproperlyConfigured(f"Contract ABI file not found at {ABI_PATH}")
except json.JSONDecodeError:
    raise ImproperlyConfigured(f"Contract ABI file is not valid JSON at {ABI_PATH}")
except KeyError as e:
    raise ImproperlyConfigured(f"Missing required key in contract ABI: {str(e)}")

BLOCKCHAIN_CONFIG = {
    "CONTRACT_ADDRESS": CONTRACT_ADDRESS,
    "PROVIDER_URL": f"https://{BLOCKCHAIN_NETWORK}.infura.io/v3/{INFURA_API_KEY}",
    "CHAIN_ID": 11155111,  # Sepolia chain id
    "GAS_LIMIT": 3000000,
    "CONTRACT_ABI": CONTRACT_ABI,
}