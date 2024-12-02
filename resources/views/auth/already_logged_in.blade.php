<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Logged In</title>
    <script>
        // Boîte de dialogue de confirmation
        if (confirm("You're already logged in. Do you want to logout?")) {
            // Redirection vers la déconnexion
            window.location.href = "{{ route('logout') }}";
        } else {
            // Redirection vers la page d'accueil
            window.location.href = "{{ route('home') }}";
        }
    </script>
</head>
<body>
</body>
</html>
