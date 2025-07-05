"""
Permissions pour la gestion des notifications
"""

from rest_framework import permissions


class IsDoctor(permissions.BasePermission):
    """
    Permission qui vérifie si l'utilisateur est un médecin
    """

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and hasattr(request.user, "doctor_profile")
        )

    def has_object_permission(self, request, view, obj):
        return obj.doctor.user == request.user
