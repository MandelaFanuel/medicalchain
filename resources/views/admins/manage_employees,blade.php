<!-- resources/views/admins/manage_employees.blade.php -->
@extends('base')

@section('title', 'Manage Employees')

@section('content')
<div class="container mt-4">
    <h2 class="mb-4">Manage Employees & Doctors</h2>

    <!-- Section for Managing Users -->
    <div class="mb-4 card">
        <div class="card-header">
            <h4 class="card-title">Employees</h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($users as $user)
                    <tr>
                        <td>{{ $user->first_name }} {{ $user->last_name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>
                            <a href="{{ route('admins.edit.profile', $user->id) }}" class="btn btn-warning btn-sm">Edit</a>
                            <a href="{{ route('admins.deleteUser', $user->id) }}" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this user?')">Delete</a>
                            <a href="{{ route('admins.assignLeave', $user->id) }}" class="btn btn-primary btn-sm">Assign Leave</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <!-- Section for Managing Doctors -->
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Doctors</h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Hospital</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($doctors as $doctor)
                    <tr>
                        <td>{{ $doctor->domain }}</td>
                        <td>{{ $doctor->hospital }}</td>
                        <td>
                            <a href="{{ route('admins.editDoctor', $doctor->id) }}" class="btn btn-warning btn-sm">Edit</a>
                            <a href="{{ route('admins.deleteDoctor', $doctor->id) }}" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this doctor?')">Delete</a>
                            <a href="{{ route('admins.assignLeave', $doctor->id) }}" class="btn btn-primary btn-sm">Assign Leave</a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <!-- Add New User or Doctor Button -->
    <div class="mt-4">
        <a href="{{ route('admins.create') }}" class="btn btn-success">Add New User</a>
        <a href="{{ route('admins.createDoctor') }}" class="btn btn-success">Add New Doctor</a>
    </div>
</div>
@endsection
