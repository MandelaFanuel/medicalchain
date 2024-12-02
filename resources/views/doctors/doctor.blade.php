@extends('base')

@section('title', 'Doctor form')

@section('content')

<div class="container mt-5">

    <form action="{{ route('doctors.store') }}" method="POST">
        @csrf
        <div class="mb-3">
            <label for="user_id" class="form-label">User</label>
            <select name="user_id" class="form-select" required>
                @foreach($users as $user)
                    <option value="{{ $user->id }}">{{ $user->first_name }} {{ $user->last_name }}</option>
                @endforeach
            </select>
        </div>
        <div class="mb-3">
            <label for="domain" class="form-label">Domain</label>
            <input type="text" class="form-control" name="domain" required>
        </div>
        <div class="mb-3">
            <label for="experience_years" class="form-label">Years of Experience</label>
            <input type="number" class="form-control" name="experience_years" required>
        </div>
        <div class="mb-3">
            <label for="diploma" class="form-label">Diploma</label>
            <input type="text" class="form-control" name="diploma" required>
        </div>

        <div class="mb-3">
            <label for="hospital" class="form-label">Hospital</label>
            <input type="text" class="form-control" name="hospital" required>
        </div>
        <div class="mb-3">
            <label for="doctor_description" class="form-label">Biography</label>
            <textarea class="form-control" name="doctor_description" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Add Doctor</button>
    </form>
</div>
@endsection




