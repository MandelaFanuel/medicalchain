from django.urls import path
from .views import (
    MedicationList,
    MedicationDetail,
)


urlpatterns = [
    path("api/medication/add/", MedicationList.as_view(), name="medication-add"),
    path(
        "api/medication/list/", MedicationList.as_view(), name="medication-list"
    ),  # Liste des médicaments
    path(
        "api/medications/<int:pk>/",
        MedicationDetail.as_view(),
        name="medication-detail",
    ),  # Détail du médicament
]
