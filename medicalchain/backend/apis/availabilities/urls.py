from django.urls import path
from .views import (
    AvailabilityCreateView,
    AvailabilityListView,
    AvailabilityUpdateView,
    AvailabilityDeleteView,
)

urlpatterns = [
    path(
        "api/availability/create/",
        AvailabilityCreateView.as_view(),
        name="create-availability",
    ),
    path(
        "api/availabilities/", AvailabilityListView.as_view(), name="availability-list"
    ),
    path(
        "api/availability/update/<int:pk>/",
        AvailabilityUpdateView.as_view(),
        name="update-availability",
    ),
    path(
        "api/availability/delete/<int:pk>/",
        AvailabilityDeleteView.as_view(),
        name="delete-availability",
    ),
]
