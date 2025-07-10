# Stage 1 - Builder
FROM python:3.11.4-slim-bookworm AS builder

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DEFAULT_TIMEOUT=600 \
    POETRY_VERSION=1.8.2 \
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

# Installer dépendances système
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && apt-get install -y --no-install-recommends \
    gcc python3-dev libsqlite3-dev curl jq && \
    rm -rf /var/lib/apt/lists/*

# Installer Poetry
RUN pip install --upgrade pip setuptools wheel && \
    pip install --no-cache-dir poetry==$POETRY_VERSION

# Copier fichiers de dépendances
COPY pyproject.toml poetry.lock* /app/

ARG ENVIRONMENT=dev

# Installer les dépendances
RUN --mount=type=cache,target=/root/.cache/pip,sharing=locked \
    poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi $(test "$ENVIRONMENT" = "prod" && echo "--without dev")

# === COPIE ET VÉRIFICATION DE L'ABI ===
COPY --chown=1000:1000 ./backend/smart-contracts/artifacts/contracts /app/backend/smart-contracts/artifacts/contracts

# Vérification approfondie du fichier ABI
RUN echo "=== Vérification ABI ===" && \
    ls -la /app/backend/smart-contracts/artifacts/contracts/MedicalChainPayments.sol/ && \
    [ -f "/app/backend/smart-contracts/artifacts/contracts/MedicalChainPayments.sol/MedicalChainPayments.json" ] && \
    echo "=== Contenu ABI (extrait) ===" && \
    jq '{abi_length: (.abi | length), bytecode_length: (.bytecode | length)}' \
    /app/backend/smart-contracts/artifacts/contracts/MedicalChainPayments.sol/MedicalChainPayments.json && \
    echo "=== Validation JSON ===" && \
    jq empty /app/backend/smart-contracts/artifacts/contracts/MedicalChainPayments.sol/MedicalChainPayments.json

# Copier le code source
COPY --chown=1000:1000 . /app

# Vérifier fichiers critiques Django
RUN { [ -f "medicalchain/settings/__init__.py" ] || (mkdir -p medicalchain/settings && touch medicalchain/settings/__init__.py); } && \
    [ -f "medicalchain/settings/base.py" ] || (echo "ERROR: base.py settings file is required!" && exit 1)

# Stage 2 - Runtime
FROM python:3.11.4-slim-bookworm AS runtime

WORKDIR /app

ARG ENVIRONMENT=dev

# Copier l'environnement Python
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin
COPY --from=builder --chown=1000:1000 /app /app

# Variables d'environnement
ENV PATH="/usr/local/bin:$PATH" \
    PYTHONPATH=/app \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    DJANGO_SETTINGS_MODULE=medicalchain.settings.${ENVIRONMENT}

# Configurer l'utilisateur non-root
RUN useradd -m appuser && chown -R appuser:appuser /app

USER appuser

HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:8000/health/ || exit 1

EXPOSE 8000

CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py collectstatic --noinput && gunicorn medicalchain.wsgi:application --bind 0.0.0.0:8000 --workers 3 --threads 2 --timeout 120 --preload --access-logfile - --error-logfile -"]