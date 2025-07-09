from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from backend.bapps.medications.models import Medication


class MedicationAPITestCase(APITestCase):

    def setUp(self):
        """Setup test data before each test."""
        self.medication_data = {
            "name": "Paracetamol",
            "description": "Pain reliever",
            "dosage": "500mg",
            "arrival_date": "2024-02-01",
            "expire_date": "2025-02-01",
        }
        self.medication = Medication.objects.create(**self.medication_data)
        self.list_url = reverse("medication-list")
        self.detail_url = reverse(
            "medication-detail", kwargs={"pk": self.medication.id}
        )

    def test_create_medication(self):
        """Test creating a new medication via API."""
        new_medication = {
            "name": "Ibuprofen",
            "description": "Anti-inflammatory",
            "dosage": "200mg",
            "arrival_date": "2024-03-01",
            "expire_date": "2025-03-01",
        }
        response = self.client.post(self.list_url, data=new_medication, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["name"], new_medication["name"])

    def test_list_medications(self):
        """Test listing all medications."""
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_retrieve_medication(self):
        """Test retrieving a specific medication by ID."""
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], self.medication_data["name"])

    def test_update_medication(self):
        """Test updating a medication's details."""
        updated_data = {
            "name": "Paracetamol 500mg",
            "description": "Updated pain reliever",
            "dosage": "500mg",
            "arrival_date": "2024-02-01",
            "expire_date": "2025-02-01",
        }
        response = self.client.put(self.detail_url, data=updated_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], updated_data["name"])

    def test_delete_medication(self):
        """Test deleting a medication."""
        response = self.client.delete(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Medication.objects.filter(id=self.medication.id).exists())
