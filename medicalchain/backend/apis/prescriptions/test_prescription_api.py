import requests

# URLs de l'API
BASE_URL = "http://localhost:8000/api"
PRESCRIPTION_URL = BASE_URL + "/prescriptions/"
DOSE_URL = BASE_URL + "/doses/"

# Authentification
AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5MjYwMjMxLCJpYXQiOjE3MzkxNzM4MzEsImp0aSI6IjFkNDE4MjIyMWUwNzQzYmI4Y2EzMzI2NDc2NjMwMzBlIiwidXNlcl9pZCI6MX0.G5xc6mh0VeDEd424MHRDDBFaICHnQIQdk6ogST4uJOw"  # Remplacer par un vrai token

headers = {"Authorization": "Bearer " + AUTH_TOKEN, "Content-Type": "application/json"}


# 1. Testing Create Prescription via ViewSet
def test_create_prescription():
    data = {
        "user": 2,  # Remplacer par l'ID de l'utilisateur
        "medication": 2,  # Remplacer par l'ID du médicament
        "dosage": "250mg",
        "frequency": "1x2",
    }
    response = requests.post(PRESCRIPTION_URL, json=data, headers=headers)
    try:
        print(
            f"Prescription Create Response: {response.status_code}, {response.json()}"
        )
    except requests.exceptions.JSONDecodeError:
        print(f"Prescription Create Response: {response.status_code}, {response.text}")


# 2. Testing Create Dose Endpoint (avec validation du nombre de doses)
def test_create_dose():
    prescription_id = 1  # Remplacer par l'ID de la prescription
    doses = [
        {"prescription": prescription_id, "taking_time": "08:00:00", "quantity": 1.0},
        {"prescription": prescription_id, "taking_time": "10:30:00", "quantity": 1.0},
    ]

    if len(doses) > 2:
        print("Error: The prescription allows only 2 doses.")
        return

    for dose in doses:
        response = requests.post(DOSE_URL, json=dose, headers=headers)
        try:
            print(f"Dose Create Response: {response.status_code}, {response.json()}")
        except requests.exceptions.JSONDecodeError:
            print(f"Dose Create Response: {response.status_code}, {response.text}")


# 3. Testing List Prescriptions Endpoint
def test_list_prescriptions():
    response = requests.get(PRESCRIPTION_URL, headers=headers)
    try:
        print(f"Prescriptions List Response: {response.status_code}, {response.json()}")
    except requests.exceptions.JSONDecodeError:
        print(f"Prescriptions List Response: {response.status_code}, {response.text}")


# 4. Testing Delete Dose Endpoint
def test_delete_dose():
    dose_id = 1  # Remplacer par l'ID de la dose à supprimer
    response = requests.delete(DOSE_URL + str(dose_id) + "/", headers=headers)

    try:
        print(f"Dose Delete Response: {response.status_code}, {response.json()}")
    except requests.exceptions.JSONDecodeError:
        print(f"Dose Delete Response: {response.status_code}, {response.text}")


# Exécution des tests
if __name__ == "__main__":
    print("==== Testing Create Prescription via ViewSet ====")
    test_create_prescription()

    print("==== Testing Create Dose Endpoint ====")
    test_create_dose()

    print("==== Testing List Prescriptions Endpoint ====")
    test_list_prescriptions()

    print("==== Testing Delete Dose Endpoint ====")
    test_delete_dose()
