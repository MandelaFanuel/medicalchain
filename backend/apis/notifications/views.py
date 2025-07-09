from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from backend.apps.notifications.models import Notification
from .serializers import NotificationSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        # Vérifier si l'utilisateur est authentifié
        if self.request.user.is_authenticated:
            # Retourner uniquement les notifications de l'utilisateur connecté
            return self.queryset.filter(recipient=self.request.user)
        return Notification.objects.none()

    @action(detail=True, methods=["post"], url_path="mark-as-read")
    def mark_as_read(self, request, pk=None):
        """
        Mark a notification as read.
        """
        try:
            notification = self.get_object()
            notification.is_read = True
            notification.save()
            return Response(
                {"message": "Notification marked as read."}, status=status.HTTP_200_OK
            )
        except Notification.DoesNotExist:
            return Response(
                {"error": "Notification not found."}, status=status.HTTP_404_NOT_FOUND
            )
