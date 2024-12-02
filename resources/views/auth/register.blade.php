@extends('base')

@section('title', 'Registration')

@section('content')
<body >
    <div class="container">
        <div class="row">
            <div class="mx-auto col-md-6 card" style="box-shadow: 2px 4px 8px #0000001a; border-radius: 10px; padding:1rem;">
                <h2 class="mb-4 text-center text-muted fw-bold">Sign Up</h2>

                <form method="POST" action="{{ route('register') }}" class="row g-3" id="form-register" enctype="multipart/form-data">
                    @csrf


                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                @if (session('success'))
                    <div class="alert alert-success">
                        {{ session('success') }}
                    </div>
                @endif


                    <div class="col md-6">
                        <label for="first_name" class="mb-1 form-label">First Name</label>
                        <input type="text" class="form-control" id="first_name" name="first_name"  value="{{ old('first_name') }}"  autocomplete  autofocus required>
                        <small class="text-message fw-bold " id="error-register-first_name"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="last_name" class="mb-1 form-label">Last name</label>
                        <input type="text" class="form-control" id="last_name" name="last_name"   value="{{ old('last_name') }}"  autocomplete  autofocus required>
                        <small class="text-message fw-bold message" id="error-register-last_name"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="email" class="mb-1 form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email"   value="{{ old('email') }}"  autocomplete  autofocus url-emailExist="{{ route('app_email_exist') }}" token="{{ csrf_token() }}" required>
                        <small class="text-message fw-bold message" id="error-register-email"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="phone" class="mb-1 form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone"   value="{{ old('phone') }}"  autocomplete  autofocus required>
                        <small class="text-message fw-bold" id="error-register-phone"></small>
                    </div>


                    <div class="row">
                        <!-- Create Password Input -->
                        <div class="col-md-6">
                            <label for="password" class="mt-3 text-muted">Create Password</label>
                            <div class="input-group">
                                <input type="password" name="password" id="password" class="form-control text-muted @error('password') is-invalid @enderror" value="{{ old('password') }}" autocomplete="password" autofocus>
                                <!-- Eye Icon to toggle password visibility -->
                                <span class="input-group-text" id="togglePassword" style="cursor: pointer;">
                                    <!-- SVG for the eye icon -->
                                    <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" style="color: blue;">
                                        <path d="M16 8s-3-7-8-7-8 7-8 7 3 7 8 7 8-7 8-7zM8 12c-2 0-3.5-1.5-3.5-4S6 4 8 4s3.5 1.5 3.5 4-1.5 4-3.5 4z"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <!-- Confirm Password Input -->
                        <div class="col-md-6">
                            <label for="password_confirmation" class="mt-3 text-muted">Confirm Password</label>
                            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" value="{{ old('password_confirmation') }}" autocomplete="password_confirmation" autofocus required>
                            <small class="text-message fw-bold message" id="error-register-password_confirmation"></small>
                        </div>
                    </div>



                    <div class="col-md-12">
                        <label for=" user_birth_date" class="mb-1 form-label">Birth Date</label>
                        <input type="date" class="form-control" id="user_birth_date" name="user_birth_date"   value="{{ old('user_birth_date') }}"  autocomplete  autofocus required>
                        <small class="text-message fw-bold message" id="error-register-user_birth_date"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="user_address" class="mb-1 form-label">Current Addresss</label>
                        <input type="text" class="form-control " id="user_address" name="user_address"   value="{{ old('user_address') }}"  autocomplete autofocus required>
                        <small class="text-message fw-bold message" id="error-register-user_address"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="userIdNumber" class="mb-1 form-label">Id-Number</label>
                        <input type="text" class="form-control " id="userIdNumber" name="userIdNumber"   value="{{ old('userIdNumber') }}"  autocomplete autofocus required>
                        <small class="text-message fw-bold message" id="error-register-userIdNumber"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="current_function" class="mb-1 form-label">Current Function</label>
                        <input type="text" class="form-control " id="current_function" name="current_function"   value="{{ old('current_function') }}"  autocomplete autofocus >
                        <small class="text-message fw-bold message" id="error-register-current_function"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="user_gender" class="mb-1 form-label">Gender</label>
                        <select class="form-control" id="user_gender" name="user_gender" autocomplete autofocus required>
                            <option value="">Select Gender</option> <!-- Option par défaut -->
                            <option value="Female" {{ old('user_gender') == 'Female' ? 'selected' : '' }}>Female</option>
                            <option value="Male" {{ old('user_gender') == 'Male' ? 'selected' : '' }}>Male</option>
                            <option value="Other" {{ old('user_gender') == 'Other' ? 'selected' : '' }}>Other</option>
                        </select>
                        <small class="text-message fw-bold message" id="error-register-user_gender"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="user_status" class="mb-1 form-label">Status</label>
                        <select class="form-control" id="user_status" name="user_status" autocomplete autofocus required>
                            <option value="">Select your Status</option> <!-- Option par défaut -->
                            <option value="Married" {{ old('user_status') == 'Married' ? 'selected' : '' }}>Married</option>
                            <option value="Single" {{ old('user_status') == 'Single' ? 'selected' : '' }}>Single</option>
                            <option value="Divorced" {{ old('user_status') == 'Divorced' ? 'selected' : '' }}>Divorced</option>
                            <option value="Separated" {{ old('user_status') == 'Separated' ? 'selected' : '' }}>Separated</option>
                        </select>
                        <small class="text-message fw-bold message" id="error-register-user_status"></small>
                    </div>

                    <div class="col-md-6">
                        <label for="photo" class="mb-1 form-label">Picture</label>
                        <input type="file" class="form-control " id="photo" name="photo" accept="image/*"  value="{{ old('photo') }}"  autocomplete autofocus  required>
                        <small class="text-message fw-bold message" id="error-register-photo"></small>
                    </div>

                    <div class="col-md-12">
                        <div class="form-check">
                            <input type="checkbox" value="" id="agreeTerms" name="agreeTerms" class="mb-1 form-check-input" >
                            <label for="agreeTerms" class="form-check-label fw-bold">Agree Terms</label><br>
                            <small class="text-message fw-bold message" id="error-register-agreeTerms"></small>
                        </div>
                    </div>

                    <button class="mt-2 btn btn-primary fw-bold" type="submit" id="register-user" name="register-user">Sign Up</button>
                    <div class="mt-1 text-center text-muted">Already have an account?<a href="{{ route('login') }}" class="fw-bold">Login now</a></div>
                </form>
            </div>
        </div>
    </div>
    <script src="http://localhost:8000/assets/lib/bootstrap/js/bootstrap.js"></script>
    <script src="http://localhost:8000/assets/lib/jquery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="http://localhost:8000/assets/main/user/user.js"></script>
</body>
</html>
@endsection



