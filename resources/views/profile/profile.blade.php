@extends('base')

@section('title', 'Registration')

@section('content')
<body>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="border-0 shadow-sm card">
                    <div class="text-center text-white card-header bg-primary">
                        <h3 class="mb-0 fw-bold">Create Your Profile</h3>
                    </div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}" enctype="multipart/form-data">
                            @csrf

                            <!-- Alertes -->
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

                            <!-- Section Photo -->
                            <div class="mb-4 text-center">
                                <label for="photo" class="form-label fw-bold">Upload Profile Picture</label>
                                <div class="d-flex justify-content-center">
                                    <input type="file" id="photo" name="photo" accept="image/*" class="form-control-file" style="width: 50%;" required>
                                </div>
                                <small class="text-muted">Supported formats: JPEG, PNG, etc.</small>
                            </div>

                            <hr>

                            <!-- Section Informations personnelles -->
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="first_name" class="form-label">First Name</label>
                                    <input type="text" id="first_name" name="first_name" class="form-control" value="{{ old('first_name') }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="last_name" class="form-label">Last Name</label>
                                    <input type="text" id="last_name" name="last_name" class="form-control" value="{{ old('last_name') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" id="email" name="email" class="form-control" value="{{ old('email') }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" id="phone" name="phone" class="form-control" value="{{ old('phone') }}" required>
                                </div>

                                
                            </div>

                            <hr>

                            <!-- Section Mot de passe -->
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" id="password" name="password" class="form-control" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="password_confirmation" class="form-label">Confirm Password</label>
                                    <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required>
                                </div>
                            </div>

                            <hr>

                            <!-- Section Détails -->
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="user_birth_date" class="form-label">Birth Date</label>
                                    <input type="date" id="user_birth_date" name="user_birth_date" class="form-control" value="{{ old('user_birth_date') }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="user_address" class="form-label">Current Address</label>
                                    <input type="text" id="user_address" name="user_address" class="form-control" value="{{ old('user_address') }}" required>
                                </div>

                                <div class="col-md-6">
                                    <label for="userIdNumber" class="form-label">ID Number</label>
                                    <input type="text" id="userIdNumber" name="userIdNumber" class="form-control" value="{{ old('userIdNumber') }}" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="current_function" class="form-label">Current Function</label>
                                    <input type="text" id="current_function" name="current_function" class="form-control" value="{{ old('current_function') }}">
                                </div>
                            </div>

                            <hr>

                            <!-- Section Sélection -->
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="user_gender" class="form-label">Gender</label>
                                    <select id="user_gender" name="user_gender" class="form-control" required>
                                        <option value="">Select Gender</option>
                                        <option value="Female" {{ old('user_gender') == 'Female' ? 'selected' : '' }}>Female</option>
                                        <option value="Male" {{ old('user_gender') == 'Male' ? 'selected' : '' }}>Male</option>
                                        <option value="Other" {{ old('user_gender') == 'Other' ? 'selected' : '' }}>Other</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="user_status" class="form-label">Status</label>
                                    <select id="user_status" name="user_status" class="form-control" required>
                                        <option value="">Select Status</option>
                                        <option value="Married" {{ old('user_status') == 'Married' ? 'selected' : '' }}>Married</option>
                                        <option value="Single" {{ old('user_status') == 'Single' ? 'selected' : '' }}>Single</option>
                                        <option value="Divorced" {{ old('user_status') == 'Divorced' ? 'selected' : '' }}>Divorced</option>
                                        <option value="Separated" {{ old('user_status') == 'Separated' ? 'selected' : '' }}>Separated</option>
                                    </select>
                                </div>
                            </div>

                            <hr>

                            <!-- Terms & Submit -->
                            <div class="mb-3 form-check">
                                <input type="checkbox" id="agreeTerms" name="agreeTerms" class="form-check-input" required>
                                <label for="agreeTerms" class="form-check-label">I agree to the terms and conditions</label>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary fw-bold">Sign Up</button>
                            </div>
                            <div class="mt-3 text-center">
                                <span>Already have an account? <a href="{{ route('login') }}">Login</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
@endsection


