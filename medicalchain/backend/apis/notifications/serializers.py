from rest_framework import serializers
from backend.apps.notifications.models import Notification

# from django.utils.timezone import make_aware


class NotificationSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()

    def get_formatted_date(self, obj):
        return obj.formatted_created_at()

    class Meta:
        model = Notification
        fields = [
            "id",
            "recipient",
            "sender",
            "title",
            "message",
            "created_at",
            "is_read",
            "formatted_date",
        ]
