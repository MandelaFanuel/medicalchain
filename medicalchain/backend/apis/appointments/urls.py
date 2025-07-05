from django.urls import path
from .views import (
    AppointmentCreateView,
    AppointmentListView,
    AppointmentUpdateView,
    AppointmentDeleteView,
)


urlpatterns = [
    path(
        "api/appointment/create/",
        AppointmentCreateView.as_view(),
        name="create-appointment",
    ),
    path("api/appointments/", AppointmentListView.as_view(), name="appointment-list"),
    path(
        "api/appointments/<int:pk>/update/",
        AppointmentUpdateView.as_view(),
        name="appointment-update",
    ),
    path(
        "api/appointments/<int:pk>/delete/",
        AppointmentDeleteView.as_view(),
        name="appointment-delete",
    ),
]
