
@extends('base')

@section('title', 'Consultation')

@section('content')
    <h1>Doctor Info</h1>
    
    <h1>{{ $doctor->first_name }} {{ $doctor->last_name }}</h1>
    <img src="{{ asset('storage/' . $doctor->photo) }}" alt="Doctor Photo" style="width: 200px; height: 200px;">
    <p>Specialization: {{ $doctor->specialization }}</p>

@endsection
