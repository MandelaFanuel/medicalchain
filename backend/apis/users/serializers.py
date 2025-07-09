from rest_framework import serializers
from backend.apps.users.models import CustomUser, DoctorProfile
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


class DoctorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorProfile
        fields = [
            "professional_id",
            "license_country",
            "diploma",
            "graduation_year",
            "speciality",
            "hospital",
            "professional_email",
            "professional_phone",
            "city_country",
            "bio",
            "diploma_copy",
            "id_copy",
            "professional_photo",
            "cv",
            "malpractice_insurance",
            "references",
            "payment_methods",
            "payment_proof",
            "created_at",
            "updated_at",
        ]


class UserProfileSerializer(serializers.ModelSerializer):
    date_joined = serializers.DateTimeField(source="created_at", read_only=True)
    last_login = serializers.DateTimeField(read_only=True)
    is_active = serializers.BooleanField(read_only=True)
    profile_image = serializers.ImageField(read_only=True)
    full_name = serializers.CharField(read_only=True)
    profile_image_url = serializers.SerializerMethodField()
    is_verified_doctor = serializers.BooleanField(read_only=True)
    doctor_profile = DoctorProfileSerializer(read_only=True)

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "email",
            "username",
            "first_name",
            "last_name",
            "full_name",
            "gender",
            "current_address",
            "current_function",
            "profile_image",
            "profile_image_url",
            "date_joined",
            "last_login",
            "is_active",
            "is_doctor",
            "is_verified_doctor",
            "doctor_profile",
        ]
        read_only_fields = fields

    def get_profile_image_url(self, obj):
        request = self.context.get("request")
        if obj.profile_image and hasattr(obj.profile_image, "url"):
            return request.build_absolute_uri(obj.profile_image.url)
        return request.build_absolute_uri("/static/images/default_profile.png")


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        required=True,
        style={"input_type": "password"},
        error_messages={
            "required": _("Password is required"),
            "min_length": _("Password must be at least 8 characters long"),
            "blank": _("Password cannot be blank"),
        },
    )
    profile_image = serializers.ImageField(
        required=False,
        allow_null=True,
        max_length=None,
        help_text=_("Upload your profile picture"),
    )
    is_doctor = serializers.BooleanField(required=False, default=False, write_only=True)
    doctor_profile = DoctorProfileSerializer(required=False, write_only=True)

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "email",
            "username",
            "first_name",
            "last_name",
            "gender",
            "current_address",
            "current_function",
            "password",
            "profile_image",
            "is_doctor",
            "doctor_profile",
        ]
        extra_kwargs = {
            "email": {
                "required": True,
                "error_messages": {
                    "required": _("Email is required"),
                    "invalid": _("Enter a valid email address"),
                    "blank": _("Email cannot be blank"),
                },
            },
            "username": {
                "required": True,
                "error_messages": {
                    "required": _("Username is required"),
                    "blank": _("Username cannot be blank"),
                },
            },
            "first_name": {
                "required": True,
                "error_messages": {
                    "required": _("First name is required"),
                    "blank": _("First name cannot be blank"),
                },
            },
            "last_name": {
                "required": True,
                "error_messages": {
                    "required": _("Last name is required"),
                    "blank": _("Last name cannot be blank"),
                },
            },
            "gender": {
                "required": True,
                "error_messages": {
                    "required": _("Gender is required"),
                    "invalid_choice": _("Select a valid gender"),
                },
            },
            "current_address": {
                "required": True,
                "error_messages": {
                    "required": _("Address is required"),
                    "blank": _("Address cannot be blank"),
                },
            },
            "current_function": {
                "required": True,
                "error_messages": {
                    "required": _("Profession is required"),
                    "blank": _("Profession cannot be blank"),
                },
            },
        }

    def validate_email(self, value):
        value = value.lower().strip()
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                _("A user with this email already exists.")
            )
        return value

    def validate_username(self, value):
        value = value.strip()
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError(_("This username is already taken."))
        return value

    def create(self, validated_data):
        profile_image = validated_data.pop("profile_image", None)
        doctor_profile_data = validated_data.pop("doctor_profile", None)
        is_doctor = validated_data.pop("is_doctor", False)

        user = CustomUser.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            username=validated_data.get("username"),
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            gender=validated_data["gender"],
            current_address=validated_data["current_address"],
            current_function=validated_data["current_function"],
            is_doctor=is_doctor,
        )

        if profile_image:
            user.profile_image = profile_image
            user.save()

        if is_doctor and doctor_profile_data:
            DoctorProfile.objects.create(user=user, **doctor_profile_data)

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(
        required=True,
        error_messages={
            "required": _("Email is required"),
            "invalid": _("Enter a valid email address"),
        },
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={"input_type": "password"},
        error_messages={"required": _("Password is required")},
    )

    def validate(self, attrs):
        email = attrs.get("email").lower().strip()
        password = attrs.get("password")

        if not email or not password:
            raise serializers.ValidationError("Both email and password are required")

        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError(
                "Unable to log in with provided credentials"
            )

        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")

        refresh = RefreshToken.for_user(user)

        attrs["user"] = user
        attrs["refresh"] = refresh
        attrs["access"] = refresh.access_token
        return attrs
