{{-- Vue pour entrer le numéro de téléphone --}}
{{-- @extends('layouts.app')

@section('content')
    <div class="container">
        <h2>Enter Your Phone Number</h2>

        <form method="POST" action="{{ route('book_appointment') }}">
            @csrf

            <!-- Utilisation des données de l'appointment depuis la session -->
            <input type="hidden" name="doctor_id" value="{{ $appointmentData['doctor_id'] }}">
            <input type="hidden" name="appointment_date" value="{{ $appointmentData['appointment_date'] }}">
            <input type="hidden" name="appointment_time" value="{{ $appointmentData['appointment_time'] }}">
            <input type="hidden" name="method" value="{{ $appointmentData['method'] }}">

            <div class="form-group">
                <label for="phone_number">Phone Number:</label>
                <input type="text" class="form-control" id="phone_number" name="phone_number" required>
            </div>

            <button type="submit" class="btn btn-primary">Book Appointment</button>
        </form>
    </div>
@endsection --}}
