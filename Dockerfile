# Stage 1 - Builder
FROM python:3.11.4-slim-bookworm AS builder

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DEFAULT_TIMEOUT=300 \
    POETRY_VERSION=1.8.2 \
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

# Installer dépendances système nécessaires (gcc, python-dev, sqlite dev, curl)
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
      gcc python3-dev libsqlite3-dev curl && \
    rm -rf /var/lib/apt/lists/*

# Installer Poetry
RUN pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir poetry==$POETRY_VERSION

# Copier fichiers de gestion des dépendances
COPY pyproject.toml poetry.lock* /app/

ARG ENVIRONMENT=dev

# Installer les dépendances Poetry sans créer de virtualenv (on utilise l'env global du builder)
RUN --mount=type=cache,target=/root/.cache/pip,sharing=locked \
    poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi $(test "$ENVIRONMENT" = "prod" && echo "--without dev")

# Copier le code source
COPY --chown=1000:1000 . /app

# Vérifier fichiers critiques Django
RUN { [ -f "medicalchain/settings/__init__.py" ] || (mkdir -p medicalchain/settings && touch medicalchain/settings/__init__.py); } && \
    [ -f "medicalchain/settings/base.py" ] || (echo "ERROR: base.py settings file is required!" && exit 1)

# Stage 2 - Runtime (image plus légère)
FROM python:3.11.4-slim-bookworm AS runtime

WORKDIR /app

# Copier uniquement les paquets python installés et le code applicatif
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin
COPY --from=builder --chown=1000:1000 /app /app

# Variables d'environnement
ENV PATH="/usr/local/bin:$PATH" \
    PYTHONPATH=/app \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DJANGO_SETTINGS_MODULE=medicalchain.settings.${ENVIRONMENT:-dev}

# Créer un utilisateur non-root pour exécuter l'app
RUN useradd -m appuser && chown -R appuser:appuser /app

USER appuser

# Healthcheck pour vérifier que l'app répond bien
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:8000/health/ || exit 1

EXPOSE 8000

# Commande de lancement optimisée
CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py collectstatic --noinput && gunicorn medicalchain.wsgi:application --bind 0.0.0.0:8000 --workers 3 --threads 2 --timeout 120 --preload --access-logfile - --error-logfile -"]
