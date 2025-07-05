from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _
import os
from django.conf import settings


def user_profile_image_path(instance, filename):
    return f"users/{instance.email}/profile_images/{filename}"


def doctor_document_path(instance, filename):
    return f"doctors/{instance.user.email}/documents/{filename}"


def get_default_profile_image():
    return os.path.join(settings.STATIC_URL, "images/default_profile.png")


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_("The Email field must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    GENDER_CHOICES = [
        ("F", _("Female")),
        ("M", _("Male")),
        ("O", _("Other")),
    ]

    email = models.EmailField(
        max_length=255, unique=True, verbose_name=_("Email Address")
    )
    first_name = models.CharField(
        max_length=60, verbose_name=_("First Name"), default=""
    )
    last_name = models.CharField(max_length=60, verbose_name=_("Last Name"), default="")
    current_address = models.CharField(
        max_length=255, verbose_name=_("Current Address"), default=""
    )
    gender = models.CharField(
        max_length=1, choices=GENDER_CHOICES, verbose_name=_("Gender"), default="O"
    )
    current_function = models.CharField(
        max_length=255, verbose_name=_("Profession/Function"), default=""
    )
    username = models.CharField(
        max_length=15, blank=True, null=True, verbose_name=_("Username"), default=None
    )
    profile_image = models.ImageField(
        upload_to=user_profile_image_path,
        blank=True,
        null=True,
        default=get_default_profile_image,
        verbose_name=_("Profile Image"),
    )
    is_active = models.BooleanField(default=True, verbose_name=_("Active"))
    is_staff = models.BooleanField(default=False, verbose_name=_("Staff Status"))
    is_doctor = models.BooleanField(default=False, verbose_name=_("Doctor Status"))
    is_verified_doctor = models.BooleanField(
        default=False, verbose_name=_("Verified Doctor Status")
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "current_address",
        "gender",
        "current_function",
    ]

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
        ordering = ["-created_at"]

    def __str__(self):
        return self.email

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_profile_image_url(self):
        if self.profile_image and hasattr(self.profile_image, "url"):
            return self.profile_image.url
        return get_default_profile_image()

    def save(self, *args, **kwargs):
        # Automatically set is_doctor based on current_function
        if self.current_function:
            self.is_doctor = any(
                term in self.current_function.lower()
                for term in ["doctor", "docteur", "médecin", "medecin"]
            )
        super().save(*args, **kwargs)


class DoctorProfile(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="doctor_extra_profile"
    )
    professional_id = models.CharField(
        max_length=50, verbose_name=_("Professional ID/License Number")
    )
    license_country = models.CharField(
        max_length=100, verbose_name=_("License Country/Region")
    )
    diploma = models.CharField(max_length=100, verbose_name=_("Main Diploma"))
    graduation_year = models.PositiveIntegerField(verbose_name=_("Graduation Year"))
    speciality = models.CharField(max_length=100, verbose_name=_("Medical Speciality"))
    hospital = models.CharField(max_length=100, verbose_name=_("Hospital/Clinic"))
    professional_email = models.EmailField(verbose_name=_("Professional Email"))
    professional_phone = models.CharField(
        max_length=20, verbose_name=_("Professional Phone")
    )
    city_country = models.CharField(
        max_length=100, verbose_name=_("City/Country of Practice")
    )
    bio = models.TextField(verbose_name=_("Professional Bio"))
    diploma_copy = models.FileField(
        upload_to=doctor_document_path, verbose_name=_("Diploma Copy")
    )
    id_copy = models.FileField(
        upload_to=doctor_document_path, verbose_name=_("ID Copy")
    )
    professional_photo = models.ImageField(
        upload_to=doctor_document_path, verbose_name=_("Professional Photo")
    )
    cv = models.FileField(upload_to=doctor_document_path, verbose_name=_("CV"))
    malpractice_insurance = models.FileField(
        upload_to=doctor_document_path, verbose_name=_("Malpractice Insurance")
    )
    references = models.FileField(
        upload_to=doctor_document_path, verbose_name=_("References")
    )
    payment_methods = models.JSONField(default=list, verbose_name=_("Payment Methods"))
    payment_proof = models.FileField(
        upload_to=doctor_document_path, verbose_name=_("Payment Proof")
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created At"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated At"))

    class Meta:
        verbose_name = _("Doctor Profile")
        verbose_name_plural = _("Doctor Profiles")

    def __str__(self):
        return f"Doctor Profile for {self.user.email}"
