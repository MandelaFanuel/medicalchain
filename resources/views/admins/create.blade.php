@extends('base')

<!-- resources/views/doctors/create.blade.php -->
@section('lAdd Doctor')


@section('content')

<div class="container col-md-7 card" style="top: 2rem;border-radius: 10px;">
    <h3 class="mt-4 mb-4 text-center fw-bold">Add Doctor</h3>
    <form action="{{ route('admins.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="row">
            <div class=" col-md-6">
                <label for="domain" class="form-label fw-bold">Select a Doctor</label>
                <select name="user_id" id="user_id" class="mb-3 form-control">
                    <option value="">Select  Doctor</option>
                    @foreach($users as $user)

                        <option value="{{ $user->id }}">{{ $user->first_name }} {{ $user->last_name }}</option>
                    @endforeach
                    <small class="text-message fw-bold message" id="error-register-domain"></small>
                </select>
            </div>

            <div class="col-md-6">
                <label for="domain" class="form-label">Domain</label>
                <input type="text" class="form-control" id="domain" name="domain" value="{{ old('first_name') }}"  autocomplete="first_name" autofocus required>
                <small class="text-message fw-bold message" id="error-register-domain"></small>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-md-6">
                <label for="experience_years" class="form-label">Experiance</label>
                <input type="number" class="form-control" id="experience_years" name="experience_years" value="{{ old('first_name') }}"  autocomplete="first_name" autofocus required>
                <small class="text-message fw-bold message" id="error-register-experience_years"></small>
            </div>

            <div class="col-md-6">
                <label for="hospital" class="form-label">Hospital</label>
                <input type="text" class="form-control" id="hospital" name="hospital" value="{{ old('first_name') }}"  autocomplete="first_name" autofocus required>
                <small class="text-message fw-bold message" id="error-register-hospital"></small>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-md-6">
                <label for="latitude" class="form-label">Latitude</label>
                <input type="text" name="latitude" id="latitude" class="form-control" placeholder="Ex : 3.20656°S" value="{{ old('latitude') }}">
                 <small class="text-message fw-bold message" id="error-register-doctor_latitude"></small>
            </div>

            <div class="col-md-6">
                <label for="longitude" class="form-label">Longitude</label>
                <input type="text" name="longitude" id="longitude" class="form-control" placeholder="Ex : 29.30529°E" value="{{ old('longitude') }}">
                 <small class="text-message fw-bold message" id="error-register-doctor_longitude"></small>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-md-6">
                <label for="diploma" class="form-label">Diploma</label>
                <input type="file" class="form-control" id="diploma" name="diploma" accept=".pdf,.doc,.docx,.ppt,.pptx" value="{{ old('first_name') }}"  autocomplete="first_name" autofocus required>
                <small class="text-message fw-bold message" id="error-register-diploma"></small>
            </div>

            <div class="col-md-6">
                <label for="amount" class="form-label">Amount to Pay (FBI)</label>
                <input type="number" class="form-control" id="amount" name="amount" value="{{ old('amount') }}"  autocomplete="amount" autofocus placeholder="20000 (FBI)" required>
            </div>


            <div class="col-md-6">
                <label for="doctor_description" class="form-label">Description</label>
                <textarea class="form-control" id="doctor_description" name="doctor_description" rows="3" value="{{ old('first_name') }}"  autocomplete="first_name" autofocus required></textarea>
                <small class="text-message fw-bold message" id="error-register-doctor_description"></small>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <button type="submit" class="btn btn-primary btn-block col-md-12 fw-bold" id="doctor-register" style="padding: 0.4rem;">Add Doctor</button>
            </div>
        </div>
    </form>
</div>

