from django.db import models
from backend.apps.users.models import CustomUser


def doctor_diploma_path(instance, filename):
    return f"doctors/{instance.user.id}/diplomas/{filename}"


def doctor_id_path(instance, filename):
    return f"doctors/{instance.user.id}/ids/{filename}"


def doctor_photo_path(instance, filename):
    return f"doctors/{instance.user.id}/photos/{filename}"


def doctor_payment_path(instance, filename):
    return f"doctors/{instance.user.id}/payments/{filename}"


def default_payment_methods():
    return ["wallet"]


class Doctor(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="doctor_profile"
    )
    professional_id = models.CharField(
        max_length=100, verbose_name="Professional ID/License Number", default="N/A"
    )
    license_country = models.CharField(
        max_length=100, verbose_name="License Country/Region", default="Burundi"
    )
    diploma = models.CharField(
        max_length=100, verbose_name="Main Diploma", default="Doctor of Medicine"
    )
    graduation_year = models.PositiveIntegerField(
        verbose_name="Graduation Year", default=2020
    )
    speciality = models.CharField(
        max_length=100, verbose_name="Medical Speciality", default="General Medicine"
    )
    hospital = models.CharField(
        max_length=100, verbose_name="Hospital/Clinic", default="Central Hospital"
    )
    professional_email = models.EmailField(
        verbose_name="Professional Email", default="example@example.com"
    )
    professional_phone = models.CharField(
        max_length=20, verbose_name="Professional Phone", default="+25712345678"
    )
    city_country = models.CharField(
        max_length=100,
        verbose_name="City/Country of Practice",
        default="Bujumbura, Burundi",
    )
    bio = models.TextField(
        verbose_name="Professional Bio",
        blank=True,
        null=True,
        default="Experienced medical professional",
    )

    # Document fields
    diploma_copy = models.FileField(
        upload_to=doctor_diploma_path,
        verbose_name="Diploma Copy",
        blank=True,
        null=True,
    )
    id_copy = models.FileField(
        upload_to=doctor_id_path, verbose_name="ID Copy", blank=True, null=True
    )
    professional_photo = models.ImageField(
        upload_to=doctor_photo_path,
        verbose_name="Professional Photo",
        blank=True,
        null=True,
    )

    # Payment information
    payment_methods = models.JSONField(
        verbose_name="Accepted Payment Methods", default=default_payment_methods
    )
    payment_proof = models.FileField(
        upload_to=doctor_payment_path,
        verbose_name="Payment Proof",
        blank=True,
        null=True,
    )
    subscription_plan = models.CharField(
        max_length=20,
        choices=[("premium", "Premium"), ("basic", "Basic")],
        default="basic",
        verbose_name="Subscription Plan",
    )
    terms_accepted = models.BooleanField(default=False, verbose_name="Terms Accepted")
    is_verified = models.BooleanField(default=False, verbose_name="Is Verified")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"
        ordering = ["-created_at"]

    def __str__(self):
        return f"Dr. {self.user.get_full_name()} ({self.speciality})"

    @property
    def full_name(self):
        return f"Dr. {self.user.get_full_name()}"
