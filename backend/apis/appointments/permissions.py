from rest_framework import permissions


class IsDoctorOrAdmin(permissions.BasePermission):
    """
    Custom permission to allow only doctors and admins to access certain views.
    """

    def has_permission(self, request, view):
        return request.user and (
            request.user.is_authenticated
            and (request.user.is_doctor or request.user.is_admin)
        )


class IsPatient(permissions.BasePermission):
    """
    Custom permission to allow only patients to access certain views.
    """

    def has_permission(self, request, view):
        return (
            request.user and request.user.is_authenticated and request.user.is_patient
        )


class IsAdmin(permissions.BasePermission):
    """
    Custom permission to allow only admins to access certain views.
    """

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.is_admin
