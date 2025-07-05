# URLs et viewsets
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PrescriptionViewSet, DoseViewSet, CreatePrescriptionView

router = DefaultRouter()
router.register(
    r"api/prescription/add", PrescriptionViewSet, basename="prescription-add"
)
router.register(
    r"api/prescription/list", PrescriptionViewSet, basename="prescription-list"
)
router.register(r"api/dose/add", DoseViewSet, basename="dose-add")
router.register(r"api/dose/list", DoseViewSet, basename="dose-list")


urlpatterns = [
    path("", include(router.urls)),
    path(
        "create_prescription/",
        CreatePrescriptionView.as_view(),
        name="create_prescription",
    ),
]
