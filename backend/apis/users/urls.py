from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet, LoginViewSet, DoctorProfileViewSet

router = DefaultRouter()
router.register(r"users", CustomUserViewSet, basename="user")
router.register(r"auth/login", LoginViewSet, basename="login")
router.register(r"doctors", DoctorProfileViewSet, basename="doctor")

urlpatterns = [
    path("api/", include(router.urls)),
]
