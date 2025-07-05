from rest_framework.permissions import AllowAny
from rest_framework import generics
from backend.apps.medications.models import Medication
from .serializers import MedicationSerializer
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.cache import cache

# ========================================================================
# Medication CRUD (Public access)
# ========================================================================


class MedicationList(generics.ListCreateAPIView):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer
    permission_classes = [AllowAny]

    @method_decorator(cache_page(60 * 15))  # Cache the response for 15 minutes
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save()


class MedicationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer
    permission_classes = [AllowAny]

    @method_decorator(cache_page(60 * 15))  # Cache the response for 15 minutes
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class TestMedicationCacheView(APIView):
    def get(self, request):
        cached_data = cache.get("my_test_key")
        if cached_data:
            return Response({"message": "Cache hit", "data": cached_data})
        else:
            cache.set("my_test_key", "This is a test cache value", timeout=60 * 15)
            return Response({"message": "Cache miss. Data cached."})
