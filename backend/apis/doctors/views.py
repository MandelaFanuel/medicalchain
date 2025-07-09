from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from backend.apps.doctors.models import Doctor
from .serializers import DoctorSerializer
from rest_framework import serializers
from django.views.decorators.cache import cache_page
from django.core.cache import cache
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from backend.apps.payments.models import Payment


class DoctorCreateView(generics.CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        user = self.request.user
        if not user.is_doctor:
            raise serializers.ValidationError("User is not registered as a doctor")

        # Check if payment was made
        payment = Payment.objects.filter(
            paid_by=user, payment_category="doctor_subscription", payment_status="Paid"
        ).first()

        if not payment:
            raise serializers.ValidationError(
                "Subscription payment of 15,000 FBU is required"
            )

        # Mark user as verified doctor
        user.is_verified_doctor = True
        user.save()

        serializer.save(user=user)


class DoctorListView(generics.ListAPIView):
    queryset = Doctor.objects.filter(is_verified=True)
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]

    @method_decorator(cache_page(60 * 15))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class DoctorDetailView(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]

    @method_decorator(cache_page(60 * 15))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class DoctorUpdateView(generics.UpdateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAdminUser]

    @method_decorator(cache_page(60 * 15))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def perform_update(self, serializer):
        serializer.save()


class DoctorDeleteView(generics.DestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAdminUser]

    @method_decorator(cache_page(60 * 15))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def perform_destroy(self, instance):
        instance.delete()


class TestDoctorCacheView(APIView):
    def get(self, request):
        cached_data = cache.get("my_test_key")
        if cached_data:
            return Response({"message": "Cache hit", "data": cached_data})
        else:
            cache.set("my_test_key", "This is a test cache value", timeout=60 * 15)
            return Response({"message": "Cache miss. Data cached."})
