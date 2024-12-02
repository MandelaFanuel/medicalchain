@extends('base')

@section('title', 'Consultation')

@section('content')
<div class="container mt-4" style="padding:0.3rem;">
    <h2 class="text-center fw-bold" style="font-size: 1.7rem; letter-spacing: 0.3rem;margin-bottom:2rem; color: #033970;border-bottom: #033970 solid 0.1px;padding: 0.5rem;">Book your Doctor</h2>

    <!-- Vérifier s'il y a un docteur spécifique à afficher -->
    @if(isset($doctor))
        <h3 class="text-center">Appointments with Dr. {{ $doctor->user->first_name }} {{ $doctor->user->last_name }}</h3>
        <div class="row">
            @forelse($appointments as $appointment)
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ $appointment->patient_name }}</h5>
                            <p class="card-text">{{ $appointment->date }} - {{ $appointment->time }}</p>
                            <p class="card-text">{{ $appointment->status }}</p>
                        </div>
                    </div>
                </div>
            @empty
                <p class="noAppointments">No appointments for this doctor.</p>
            @endforelse
        </div>
    @else
        <!-- Affichage de tous les docteurs -->
        <div class="row">
            @forelse($doctors as $doctor)
                <div class="mb-4 col-md-4">
                    <div class="shadow-sm card h-100" style="border-radius: 8px;">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="mb-3 img-container" style="border-radius: 10px; overflow: hidden;">
                                    <img src="{{ isset($doctor->user) ? asset('storage/' . $doctor->user->photo) : asset('default-photo.jpg') }}" class="img-fluid" style="object-fit: cover; border-radius: 10px;">
                                </div>
                                <div class="text-left col-md-6" style="padding: 0.77rem; font-size:0.7rem;">
                                    <h5 class="card-title" style="font-size: 1rem; text-align:center;">
                                        <strong>Dr.</strong> {{ $doctor->user->first_name ?? 'N/A' }} {{ $doctor->user->last_name ?? 'N/A' }}
                                    </h5>
                                    <p class="mb-2 text-muted"><strong>Domain :</strong> {{ $doctor->domain ?? 'N/A' }}</p>
                                    <p class="mb-2 text-muted"><strong>Address :</strong> {{ $doctor->user->user_address ?? 'N/A' }}</p>

                                    @if($doctor->availabilities->isNotEmpty())
                                        <p class="mb-2 text-muted"><strong>Day of work :</strong> {{ $doctor->availabilities->first()->day }}</p>
                                        <p class="mb-2 text-muted"><strong>Start-Time :</strong> {{ \Carbon\Carbon::parse($doctor->availabilities->first()->start_time)->format('h:i A') }}</p>
                                        <p class="mb-2 text-muted"><strong>End-Time :</strong> {{ \Carbon\Carbon::parse($doctor->availabilities->first()->end_time)->format('h:i A') }}</p>
                                    @else
                                        <p class="mb-2 text-muted"> <strong>Availability:</strong><span  class="fw-bold" style="color: red;">No Availability Set:</span></p>
                                    @endif

                                    <p class="mb-2 text-muted"><strong>Hospital :</strong> {{ $doctor->hospital }}</p>
                                    <p class="mb-1"><strong>Experience:</strong> {{ $doctor->experience_years ?? 'N/A' }} years</p>
                                    <p class="mb-1"><strong>Appointments:</strong> {{ $doctor->Appointments->count() ?? 'N/A' }} Patients</p>
                                </div>
                            </div>
                            <p class="mt-3" style="font-size:0.7rem;"><strong>Description :</strong> {{ Str::limit($doctor->doctor_description, 300) }}</p>
                            <a href="#" class="fw-bold" style="color:#ffffff;background-color: #008000; border-color: #008000; padding:0.3rem;border-radius:15px;text-decoration:none;"> More</a>
                        </div>
                        <div class="card-footer d-flex justify-content-center">
                            <a href="{{ route('appointments.show', $doctor->id) }}" class="btn btn-primary btn-sm me-2 fw-bold" style="background-color: #033970;">Appointment</a>
                            <a href="{{ route('doctors.chat', $doctor->id) }}" class="btn btn-success btn-sm me-2 fw-bold" style="background-color: #037584;">Message</a>
                            <a href="#" class="btn btn-danger btn-sm me-2 fw-bold" style="background-color: #4e1c4e;">Map Doctor</a>
                        </div>
                    </div>
                </div>
            @empty
                <div class="col-6 justify-content-between">
                    <p class="text-center" style="color: red;">No Doctor Found!</p>
                </div>
            @endforelse
        </div>
    @endif
</div>
@endsection

