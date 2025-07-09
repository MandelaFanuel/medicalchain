from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.cache import cache
from rest_framework.decorators import action
from backend.apps.users.models import CustomUser, DoctorProfile
from .serializers import (
    CustomUserSerializer,
    LoginSerializer,
    UserProfileSerializer,
    DoctorProfileSerializer,
)
from rest_framework.parsers import MultiPartParser, FormParser


class LoginViewSet(viewsets.ViewSet):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]
        cache_key = f"login_attempts_{email}"

        # Brute-force protection
        attempts = cache.get(cache_key, 0)
        if attempts >= 5:
            return Response(
                {"error": "Too many login attempts. Please try again later."},
                status=status.HTTP_429_TOO_MANY_REQUESTS,
            )

        user = authenticate(email=email, password=password)
        if not user:
            cache.set(cache_key, attempts + 1, timeout=300)
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        # Reset attempt counter on successful login
        cache.delete(cache_key)

        refresh = RefreshToken.for_user(user)
        profile_image_url = user.get_profile_image_url()

        return Response(
            {
                "message": "Login successful",
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "username": user.username,
                    "is_doctor": user.is_doctor,
                    "is_verified_doctor": user.is_verified_doctor,
                    "gender": user.gender,
                    "current_function": user.current_function,
                    "current_address": user.current_address,
                    "full_name": user.full_name,
                    "profile_image": profile_image_url,
                },
                "tokens": {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
            },
            status=status.HTTP_200_OK,
        )


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]
    parser_classes = (MultiPartParser, FormParser)

    def get_permissions(self):
        if self.action in ["create"]:
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.action in ["retrieve", "me"]:
            return UserProfileSerializer
        return super().get_serializer_class()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            user = serializer.save()
            headers = self.get_success_headers(serializer.data)

            return Response(
                {
                    "message": "User registered successfully",
                    "user": UserProfileSerializer(
                        user, context={"request": request}
                    ).data,
                },
                status=status.HTTP_201_CREATED,
                headers=headers,
            )

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

    @action(detail=True, methods=["put", "patch"], permission_classes=[IsAuthenticated])
    def update_profile_image(self, request, pk=None):
        user = self.get_object()
        if user != request.user:
            return Response(
                {"error": "You can only update your own profile image"},
                status=status.HTTP_403_FORBIDDEN,
            )

        if "profile_image" not in request.data:
            return Response(
                {"error": "No image provided"}, status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(
            user, data={"profile_image": request.data["profile_image"]}, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(UserProfileSerializer(user, context={"request": request}).data)


class UserProfileViewSet(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet
):
    queryset = CustomUser.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def get_object(self):
        return self.request.user

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)


class DoctorProfileViewSet(viewsets.ModelViewSet):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfileSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        if self.request.user.is_staff:
            return DoctorProfile.objects.all()
        return DoctorProfile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
