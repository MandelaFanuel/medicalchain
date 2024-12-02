

@extends('base')
@include('script')

@section('title','Appointments')

@section('content')
<div class="container mt-10">
    <div class="shadow-sm card">
        <div class="text-white card-header bg-primary">
            <h5 class="fw-bold">Appointments</h5>
        </div>
        <div class="card-body">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        {{-- <th class="fw-bold">No</th> --}}
                        <th class="fw-bold">Patient Name</th>
                        <th class="fw-bold">Doctor Name</th>
                        <th class="fw-bold">Date</th>
                        <th class="fw-bold">Hour</th>
                        <th class="fw-bold">Patient Address</th>
                        <th class="fw-bold">Hospital </th>
                        <th class="fw-bold">Patient Age</th>
                        <th class="fw-bold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($appointments as $appointment)
                    <tr>
                        <td>{{ $appointment->id }}</td>
                        <td>{{ $appointment->user->first_name }} {{ $appointment->user->last_name }}</td>
                        <td>{{ $appointment->doctor->user->first_name }} {{ $appointment->user->doctor->last_name }}</td>
                        <td>{{ $appointment->appointment_date }}</td>
                        <td>{{ \Carbon\Carbon::parse($appointment->appointment_time)->format('H:i') }}</td>
                        <td>{{ $appointment->user->user_address }}</td>
                        <td>{{ $appointment->doctor->hospital }}</td>
                        <td>{{ \Carbon\Carbon::parse($appointment->user->user_birth_date)->age }} years old<br>
                        <td>{{ ucfirst($appointment->status) }}</td>
                            </tr>
                            @empty
                            <tr>
                                <td colspan="8" class="text-center" style="color: red;">No appointment found at the moment</td>
                            </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>

{{-- Recharging appointment Data automatically from the database after every 30 seconds with AJAX --}}
 <script>
    $(document).ready(function() {
        function loadAppointments() {
            $.ajax({
                url: "{{ route('admins.appointments_today') }}",
                method: "GET",
                success: function(response) {
                    let appointmentsHTML = '';
                    if (response.appointments.length > 0) {
                        response.appointments.forEach(appointment => {
                            appointmentsHTML += `
                                <tr>
                                    <td>${appointment.doctor.user.first_name} ${appointment.doctor.user.last_name}</td>
                                    <td>${appointment.user.first_name} ${appointment.user.last_name}</td>
                                    <td>${appointment.date}</td>
                                    <td>${appointment.time}</td>
                                    <td>${appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}</td>
                                    <td>${appointment.user.current_address}</td>
                                    <td>${appointment.user.age} years</td>
                                </tr>
                            `;
                        });
                    } else {
                        appointmentsHTML = `<p style="color: red; text-align: center;">No appointment at the moment</p>`;
                    }
                    $('#appointmentsTable').html(appointmentsHTML);
                }
            });
        }

        loadAppointments(); // Load on page load
        setInterval(loadAppointments, 30000); // Refresh every 30 seconds
    });
</script>
-@endsection



{{-- ======================================================================================================================= --}}
{{-- ============================================================================================================================== --}}
