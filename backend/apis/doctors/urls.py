from django.urls import path
from .views import (
    DoctorCreateView,
    DoctorListView,
    DoctorDetailView,
    DoctorUpdateView,
    DoctorDeleteView,
)

urlpatterns = [
    path("api/doctors/create/", DoctorCreateView.as_view(), name="doctor-create"),
    path("api/doctors/", DoctorListView.as_view(), name="doctor-list"),
    path("api/doctors/<int:pk>/", DoctorDetailView.as_view(), name="doctor-detail"),
    path(
        "api/doctors/<int:pk>/update/", DoctorUpdateView.as_view(), name="doctor-update"
    ),
    path(
        "api/doctors/<int:pk>/delete/", DoctorDeleteView.as_view(), name="doctor-delete"
    ),
]
