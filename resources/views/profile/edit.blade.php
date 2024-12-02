@extends('base')

@section('title', 'Edition')

@section('content')
<div class="container p-4 col-md-8 card">
    <h2 class="mb-3 text-center fw-bold text-muted">Edit Profile</h2>

    @if (session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <form  method="POST" action="{{ route('profile.update') }}" class="row g-3" id="form-register" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="row g-3">
            <div class="col md-6">
                <label for="first_name" class="mb-1 form-label fw-bold text-muted">First Name</label>
                <input type="text" class="form-control" id="first_name" name="first_name"  value="{{ old('first_name') }}"  autocomplete autofocus required>
                <small class="text-message fw-bold " id="error-register-first_name"></small>
            </div>

            <div class="col-md-6">
                <label for="last_name" class="mb-1 form-label fw-bold text-muted">Last name</label>
                <input type="text" class="form-control" id="last_name" name="last_name"   value="{{ old('last_name') }}"  autocomplete  autofocus required>
                <small class="text-message fw-bold message" id="error-register-last_name"></small>
            </div>

            <div class="col-md-6">
                <label for="userIdNumber" class="mb-1 form-label fw-bold text-muted">Id-Number</label>
                <input type="text" class="form-control " id="userIdNumber" name="userIdNumber"   value="{{ old('userIdNumber') }}"  autocomplete  autofocus required>
                <small class="text-message fw-bold message" id="error-register-userIdNumber"></small>
            </div>

            <div class="col-md-6">
                <label for="phone" class="mb-1 form-label fw-bold text-muted">Phone</label>
                <input type="tel" class="form-control" id="phone" name="phone"   value="{{ old('phone') }}"  autocomplete  autofocus required>
                <small class="text-message fw-bold" id="error-register-phone"></small>
            </div>

            <div class="col-md-12">
                <label for=" user_birth_date" class="mb-1 form-label fw-bold text-muted">Birth Date</label>
                <input type="date" class="form-control" id="user_birth_date" name="user_birth_date"   value="{{ old('user_birth_date') }}"  autocomplete="user_birth_date" autofocus required>
                <small class="text-message fw-bold message" id="error-register-user_birth_date"></small>
            </div>

            <div class="col-md-6">
                <label for="user_address" class="mb-1 form-label fw-bold text-muted">Current Addresss</label>
                <input type="text" class="form-control " id="user_address" name="user_address"   value="{{ old('user_address') }}"  autocomplete autofocus required>
                <small class="text-message fw-bold message" id="error-register-user_address"></small>
            </div>


            <div class="col-md-6">
                <label for="current_function" class="mb-1 form-label fw-bold text-muted">Current Function</label>
                <input type="text" class="form-control " id="current_function" name="current_function"   value="{{ old('current_function') }}"  autocomplete autofocus >
                <small class="text-message fw-bold message" id="error-register-current_function"></small>
            </div>

            <div class="col-md-6">
                <label for="user_status" class="mb-1 form-label fw-bold text-muted">Status</label>
                <select class="form-control" id="user_status" name="user_status" autocomplete  autofocus required>
                    <option value="">Select your Status</option> <!-- Option par défaut -->
                    <option value="Married" {{ old('user_status') == 'Married' ? 'selected' : '' }}>Married</option>
                    <option value="Single" {{ old('user_status') == 'Single' ? 'selected' : '' }}>Single</option>
                    <option value="Divorced" {{ old('user_status') == 'Divorced' ? 'selected' : '' }}>Divorced</option>
                    <option value="Separated" {{ old('user_status') == 'Separated' ? 'selected' : '' }}>Separated</option>
                </select>
                <small class="text-message fw-bold message" id="error-register-user_status"></small>
            </div>

            <div class="col-md-6">
                <label for="email" class="mb-1 form-label fw-bold text-muted">Email</label>
                <input type="email" class="form-control" id="email" name="email"   value="{{ old('email') }}"  autocomplete  autofocus url-emailExist="{{ route('app_email_exist') }}" token="{{ csrf_token() }}" required>
                <small class="text-message fw-bold message" id="error-register-email"></small>
            </div>
        </div>

        <div class="mt-4 d-flex justify-content-center" style="width: 70%; justify-content-between;">
            <button type="submit" class="btn btn-primary me-3 fw-bold">Save Changes</button>
            <button type="submit" form="delete-form" class="btn btn-danger fw-bold">Delete Profile</button>
        </div>
    </form>

    <form id="delete-form" action="{{ route('profile.delete') }}" method="POST" class="d-none">
        @csrf
        @method('DELETE')
    </form>
</div>
@endsection
