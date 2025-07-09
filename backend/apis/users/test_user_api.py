import requests

# Base URLs
LOGIN_URL = "http://localhost:8000/api/v1/auth/login/"
USERS_URL = "http://localhost:8000/api/v1/users/"


def test_login():
    """
    Test the login endpoint with correct and incorrect credentials.
    """
    print("==== Testing Login Endpoint ====")

    valid_credentials = {"email": "user@example.com", "password": "password123"}
    invalid_credentials = {"email": "user@example.com", "password": "wrongpass"}

    response = requests.post(LOGIN_URL, json=invalid_credentials)
    print("❌ Invalid Login:", response.json())

    response = requests.post(LOGIN_URL, json=valid_credentials)
    print("✅ Valid Login:", response.json())


def test_get_users():
    """
    Test getting the list of users (both all users and filtered queries).
    """
    print("\n==== Testing User List Endpoint ====")

    response = requests.get(USERS_URL)
    print("👥 All Users:", response.status_code, response.json())

    response = requests.get(f"{USERS_URL}?role=doctor")
    print("🩺 Doctors Only:", response.status_code, response.json())

    response = requests.get(f"{USERS_URL}?role=patient")
    print("🩹 Patients Only:", response.status_code, response.json())


if __name__ == "__main__":
    test_login()
    test_get_users()
