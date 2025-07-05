from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
    SpectacularRedocView,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
from django.http import JsonResponse
from django.views.decorators.http import require_GET


@require_GET
def health_check(request):
    """Endpoint de vérification de santé de l'application"""
    return JsonResponse(
        {"status": "ok", "service": "django", "debug": str(settings.DEBUG)}, status=200
    )


# Liste des URLs principales
urlpatterns = [
    # Interface d'administration Django
    path("admin/", admin.site.urls),
    # Inclusions des URLs des différentes APIs
    path("", include("backend.apis.users.urls")),  # API Utilisateurs
    path("", include("backend.apis.medications.urls")),  # API Médicaments
    path("", include("backend.apis.notifications.urls")),  # API Notifications
    path("", include("backend.apis.prescriptions.urls")),  # API Prescriptions
    path("", include("backend.apis.reminders.urls")),  # API Rappels
    path("", include("backend.apis.appointments.urls")),  # API Rendez-vous
    path("", include("backend.apis.payments.urls")),  # API Paiements
    path("", include("backend.apis.doctors.urls")),  # API Docteurs
    path("", include("backend.apis.availabilities.urls")),  # API Disponibilités
    # Documentation API
    path("schema/", SpectacularAPIView.as_view(), name="schema"),  # Schema OpenAPI
    path(
        "swagger/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"
    ),  # UI Swagger
    path(
        "redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"
    ),  # Documentation Redoc
    # Profilage avec Silk
    path("silk/", include("silk.urls", namespace="silk")),
    # Authentification JWT
    path(
        "api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),  # Obtention token
    path(
        "api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),  # Rafraîchissement token
    path(
        "api/token/verify/", TokenVerifyView.as_view(), name="token_verify"
    ),  # Vérification token
    # Healthcheck
    path("health/", health_check, name="health-check"),
    # Silk
    path("silk/", include("silk.urls", namespace="silk")),
]

# Ajout des URLs pour les fichiers statiques et médias
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
