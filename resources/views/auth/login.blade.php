@extends('base')

@section('title', 'Login')

@section('content')
<body>
    <div class="container">
        <div class="row">
            <div class="mx-auto mb-2 col-md-4 card" style="box-shadow: 2px 4px 8px #0000001a; border-radius: 10px; padding:1rem;">
                <h2 class="mt-5 mb-4 text-center text-muted fw-bold">Sign In</h2>

                <form method="POST" action="{{ route('login.post') }}">
                    @csrf

                    <label for="email" class="text-muted">Email</label>
                    <input type="email" name="email" id="email" class="form-control text-muted @error('email') is-invalid @enderror" value="{{ old('email') }}" autocomplete="email" autofocus>

                    <label for="password" class="mt-3 text-muted">Password</label>
                    <div class="input-group">
                        <input type="password" name="password" id="password" class="form-control text-muted @error('password') is-invalid @enderror" value="{{ old('password') }}" autocomplete="password" autofocus>
                        <!-- Eye Icon to toggle password visibility -->
                        <span class="input-group-text" id="togglePassword" style="cursor: pointer;">
                            <!-- Using an SVG for the eye icon -->
                            <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" style="color: blue;">
                                <path d="M16 8s-3-7-8-7-8 7-8 7 3 7 8 7 8-7 8-7zM8 12c-2 0-3.5-1.5-3.5-4S6 4 8 4s3.5 1.5 3.5 4-1.5 4-3.5 4z"/>
                            </svg>
                        </span>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="mt-3 form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label fw-bold" for="remember">Remember me</label>
                                <small class="text-danger fw-bold" id="error-register-remember"></small>
                            </div>
                        </div>
                        <div class="mt-3 text-end col-md-6 text-danger fw-bold">
                            <a href="#" style="color: #d94040;">Forgot Password ?</a>
                        </div>

                        <button class="mt-3 btn btn-primary fw-bold" type="submit">Log In</button>
                    </div>

                    <div class="mt-3 mb-4 text-center text-muted">Not registered yet? <a href="{{ route('register') }}" class="fw-bold">Create account</a></div>

                    @if ($errors->has('error'))
                        <div id="customErrorMessage" class="alert alert-danger col-m-6" style="position: absolute; bottom: 10%; right: 10%; background-color: transparent; color: #d94040; font-weight: bold; border: none; display: block; justify-content: center; align-items: center; with:30%;">
                            {{ $errors->first('error') }}
                        </div>
                    @endif
                </form>
            </div>
        </div>
    </div>

    <script src="http://localhost:8000/assets/lib/bootstrap/js/bootstrap.js"></script>
    <script src="http://localhost:8000/assets/lib/jquery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="http://localhost:8000/assets/main/user/user.js"></script>

    <script>
        // Verifying errors
        if (document.getElementById('customErrorMessage')) {
            setTimeout(function() {
                document.getElementById('customErrorMessage').style.display = 'none';
            }, 8000);
        }

        // Toggle password visibility
        const togglePassword = document.getElementById('togglePassword');
        const passwordField = document.getElementById('password');
        const eyeIcon = document.getElementById('eyeIcon');

        togglePassword.addEventListener('click', function() {
            // Toggle the password field visibility
            const type = passwordField.type === 'password' ? 'text' : 'password';
            passwordField.type = type;

            // Toggle the eye icon to represent visibility of the password
            if (type === 'password') {
                eyeIcon.setAttribute('class', 'bi bi-eye');
            } else {
                eyeIcon.setAttribute('class', 'bi bi-eye-slash'); // Eye with a slash (indicating password is visible)
            }
        });
    </script>
</body>
@endsection
