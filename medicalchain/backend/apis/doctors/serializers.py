from rest_framework import serializers
from backend.apps.doctors.models import Doctor
from backend.apis.users.serializers import UserProfileSerializer


class DoctorSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)
    full_name = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    payment_methods_display = serializers.SerializerMethodField()
    subscription_fee = serializers.SerializerMethodField()

    class Meta:
        model = Doctor
        fields = [
            "id",
            "user",
            "full_name",
            "professional_id",
            "license_country",
            "diploma",
            "graduation_year",
            "speciality",
            "hospital",
            "professional_email",
            "professional_phone",
            "city_country",
            "diploma_copy",
            "id_copy",
            "professional_photo",
            "payment_methods",
            "payment_methods_display",
            "payment_proof",
            "is_verified",
            "subscription_plan",
            "terms_accepted",
            "bio",
            "formatted_date",
            "created_at",
            "updated_at",
            "subscription_fee",
        ]
        read_only_fields = ["is_verified", "formatted_date", "user"]

    def get_formatted_date(self, obj):
        return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    def get_full_name(self, obj):
        return f"Dr. {obj.user.get_full_name()}"

    def get_payment_methods_display(self, obj):
        method_map = {
            "lumicash": "Lumicash",
            "ecocash": "Ecocash",
            "pesa_flash": "Pesa Flash",
            "pi_network": "Pi Network",
            "btc": "Bitcoin",
            "bnb": "BNB",
            "eth": "Ethereum",
            "visa": "Visa",
            "mastercard": "MasterCard",
            "wallet": "Medichain Wallet",
        }
        return [method_map.get(method, method) for method in obj.payment_methods]

    def get_subscription_fee(self, obj):
        return "15,000 FBU"

    def create(self, validated_data):
        user = self.context["request"].user
        if not user.is_doctor:
            raise serializers.ValidationError("User is not registered as a doctor")
        return Doctor.objects.create(user=user, **validated_data)
