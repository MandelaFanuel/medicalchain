from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import ValidationError
from backend.apps.availabilities.models import Availability
from .serializers import AvailabilitySerializer
from django.core.cache import cache
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator


class AvailabilityCreateView(generics.CreateAPIView):
    """Create availability (Doctors only)."""

    serializer_class = AvailabilitySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if not hasattr(self.request.user, "doctor"):
            raise ValidationError("Only doctors can create availability.")
        # Invalidate cache after creation
        cache.clear()  # Ensure fresh data after invalidation
        serializer.save(doctor=self.request.user.doctor)


class AvailabilityListView(generics.ListAPIView):
    """List all availabilities."""

    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    permission_classes = [AllowAny]  # Public access for availability listing

    @method_decorator(cache_page(60 * 15))  # Cache response for 15 minutes
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class AvailabilityDetailView(generics.RetrieveAPIView):
    """Retrieve availability details."""

    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

    @method_decorator(cache_page(60 * 10))  # Cache response for 10 minutes
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class AvailabilityUpdateView(generics.UpdateAPIView):
    """Update availability (Doctor or Admin only)."""

    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        if (
            self.request.user.is_staff
            or self.request.user == serializer.instance.doctor.user
        ):
            # Invalidate cache after update
            cache.clear()  # Ensure fresh data after invalidation
            serializer.save()
        else:
            raise ValidationError(
                "You do not have permission to update this availability."
            )


class AvailabilityDeleteView(generics.DestroyAPIView):
    """Delete availability (Doctor or Admin only)."""

    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    permission_classes = [IsAuthenticated]

    def perform_destroy(self, instance):
        if self.request.user.is_staff or self.request.user == instance.doctor.user:
            # Invalidate cache after deletion
            cache.clear()  # Ensure fresh data after invalidation
            instance.delete()
        else:
            raise ValidationError(
                "You do not have permission to delete this availability."
            )
