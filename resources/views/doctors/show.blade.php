
@extends('base')

@section('title', 'Doctor Info')

@section('content')


@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="shadow-sm card">
                <div class="card-body d-flex">


                    <!-- Photo du docteur -->
                    <div class="mr-4">
                        <img src="{{ asset('storage/' . $doctor->photo) }}" alt="Photo de {{ $doctor->first_name }}" class="rounded img-fluid" style="width: 150px; height: 150px;">
                    </div>



                    <!-- Détails du docteur -->
                    <div>
                        <h3>{{ $doctor->first_name }} {{ $doctor->last_name }}</h3>
                        <p><strong>Spécialité :</strong> {{ $doctor->domain }}</p>
                        <p><strong>Diplôme :</strong> {{ $doctor->diploma }}</p>
                        <p><strong>Années d'expérience :</strong> {{ $doctor->experience_years }}</p>
                        <p><strong>Hôpital :</strong> {{ $doctor->hospital }}</p>
                        <p><strong>Biographie :</strong> {{ $doctor->doctor_description }}</p>
                    </div>
                </div>



                <!-- Disponibilités du docteur -->
                <div class="card-body">
                    <h4>Disponibilités</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Jour</th>
                                <th>Heure de début</th>
                                <th>Heure de fin</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($doctor->availability as $availability)
                                <tr>
                                    <td>{{ $availability->day }}</td>
                                    <td>{{ $availability->start_time }}</td>
                                    <td>{{ $availability->end_time }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>



                <!-- Boutons d'action -->
                <div class="text-right card-body">
                    <a href="#" class="mr-2 btn btn-primary">Appointment</a>
                    <a href="#" class="btn btn-secondary">Consult</a>
                    <a href="#" class="btn btn-info btn-sm ms-2 fw-bold">Map the Doctor</a>
                    <a href="{{ route('doctor.chat', $doctor->id) }}" class="btn btn-success btn-sm">Chat</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

