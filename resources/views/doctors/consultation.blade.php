@extends('base')

@section('title', 'Consultation')

@section('content')
<div class="container mt-4" style="padding:0.3rem;">
    <h2 class="text-center fw-bold" style="font-size: 1.7rem; letter-spacing: 0.3rem;margin-bottom:2rem; color: #033970;border-bottom: #033970 solid 0.1px;padding: 0.5rem;">Book your Doctor</h2>

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
                                        <p class="mb-2 text-muted"> <strong>Availability:</strong><span  class="fw-bold" style="color: red;">No Availability Set</span></p>
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

                            <a href="javascript:void(0);" class="btn btn-success btn-sm me-2 fw-bold openMessagePopup" style="background-color: #037584;" data-doctor-id="{{ $doctor->id }}" data-doctor-name="Dr. {{ $doctor->user->first_name ?? '' }} {{ $doctor->user->last_name ?? '' }}"> Chat Doctor </a>

                            <button class="btn btn-danger btn-sm open-map" data-lat="{{ $doctor->latitude }}" data-lng="{{ $doctor->longitude }}" data-hospital="{{ $doctor->hospital }}" style="background-color: #4e1c4e;">Map doctor</button>
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

    <div id="messagePopup" class="popup-overlay" style="display: none;">
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h4 class="text-center" id="popupTitle">Send message to</h4>
            <div id="chatBox" style="border: 1px solid #ccc; height: 300px; overflow-y: auto;"></div>

            <form id="messageForm" class="mt-3">
                @csrf
                <input type="hidden" id="selectedDoctorId" name="receiver_id" value="">
                <div class="input-group">
                    <input type="text" name="message" class="form-control" placeholder="Write your message here..." required>
                    <button type="submit" class="btn btn-primary" style="background-color: #037584;">Send</button>
                </div>
            </form>
        </div>
    </div>

    <div class="modal fade" id="mapPopup" tabindex="-1" aria-labelledby="mapPopupLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="mapPopupLabel">Map of Doctor</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="map" style="height: 400px;"></div>

                    <div id="distance-info" style="margin-top: 15px; text-align: center;">
                        <p id="walking-distance"></p>
                        <p id="bike-distance"></p>
                        <p id="car-distance"></p>
                    </div>

                    <div class="gap-3 mt-3 transport-icons d-flex justify-content-center">
                        <img src="path_to_icons/walking_icon.png" data-speed="5" class="transport-icon" title="Walking" style="cursor: pointer; width: 50px;">
                        <img src="path_to_icons/bike_icon.png" data-speed="15" class="transport-icon" title="Bike" style="cursor: pointer; width: 50px;">
                        <img src="path_to_icons/car_icon.png" data-speed="50" class="transport-icon" title="Car" style="cursor: pointer; width: 50px;">
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>

document.addEventListener('DOMContentLoaded', function () {
    const messagePopup = document.getElementById('messagePopup');
    const closePopup = document.querySelector('.close-popup');
    const messageForm = document.getElementById('messageForm');
    const selectedDoctorId = document.getElementById('selectedDoctorId');
    const chatBox = document.getElementById('chatBox');
    
    // Récupérer l'ID de l'utilisateur authentifié
    const authUserId = {{ auth()->id() }};

    document.querySelectorAll('.openMessagePopup').forEach(button => {
        button.addEventListener('click', function() {
            const doctorId = this.getAttribute('data-doctor-id');
            const doctorName = this.getAttribute('data-doctor-name');

            selectedDoctorId.value = doctorId;
            document.getElementById('popupTitle').textContent = `Chat with ${doctorName}`;
            messagePopup.style.display = 'flex';
            loadMessages(doctorId);
        });
    });

    closePopup.addEventListener('click', () => {
        messagePopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === messagePopup) {
            messagePopup.style.display = 'none';
        }
    });

    async function loadMessages(doctorId) {
    if (!doctorId) {
        console.error('doctorId is required');
        return;
    }

    try {
        // Assurez-vous que l'URL de l'API est correcte
        const response = await fetch(`/api/messages/conversation/${doctorId}`, {
            method: 'GET', // Utiliser GET pour récupérer les messages
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${yourTokenHere}` // Si nécessaire, ajoute un token pour l'authentification
            }
        });

        if (!response.ok) throw new Error('Failed to load messages');

        const messages = await response.json();
        chatBox.innerHTML = ''; // Clear chat box

        messages.forEach(message => {
            appendMessage(message, message.sender_id === authUserId);
        });
    } catch (error) {
        console.error('Error loading messages:', error);
    }
}



    function appendMessage(message, isSent) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${isSent ? 'sent' : 'received'}`;
        messageElement.innerHTML = `
            <div class="message-content">
                ${message.body}
                <small class="message-time">${new Date(message.sent_date).toLocaleTimeString()}</small>
            </div>
        `;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    messageForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const message = formData.get('message');
        const receiverId = selectedDoctorId.value;

        if (!message.trim() || !receiverId) return;

        try {
            // Afficher un indicateur de chargement ou une animation ici si nécessaire.
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    receiver_id: receiverId,
                    body: message
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send message');
            }

            const data = await response.json();
            appendMessage(data, true);
            this.reset();

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });

    window.Echo.private(`chat.${authUserId}`)
        .listen('MessageSent', (e) => {
            appendMessage(e.message, false);
        });
});

</script>
@endsection
