@extends('base')

@section('title', 'Consultation')

@section('content')
<div class="container mt-4" style="padding:0.3rem;">
    <h2 class="text-center fw-bold" style="font-size: 1.7rem; letter-spacing: 0.3rem;margin-bottom:2rem; color: #033970;border-bottom: #033970 solid 0.1px;padding: 0.5rem;">Consult with Doctor</h2>

    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center">Chat with Dr. {{ $receiver->first_name }} {{ $receiver->last_name }}</h3>
        </div>
    </div>

    <div id="messagePopup" class="popup-overlay" style="display: none;">
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <h4 class="text-center" id="popupTitle">Send message to</h4>
            <div id="chatBox" style="border: 1px solid #ccc; height: 300px; overflow-y: auto;"></div>

            <form id="messageForm" class="mt-3">
                @csrf
                <input type="hidden" id="selectedDoctorId" name="receiver_id" value="{{ $receiverId }}">
                <div class="input-group">
                    <input type="text" name="message" class="form-control" placeholder="Write your message here..." required>
                    <button type="submit" class="btn btn-primary" style="background-color: #037584;">Send</button>
                </div>
            </form>
        </div>
    </div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const messagePopup = document.getElementById('messagePopup');
    const closePopup = document.querySelector('.close-popup');
    const messageForm = document.getElementById('messageForm');
    const selectedDoctorId = document.getElementById('selectedDoctorId');
    const chatBox = document.getElementById('chatBox');

    async function loadMessages(doctorId) {
        try {
            const response = await fetch(`/api/messages/conversation/${doctorId}`);
            if (!response.ok) throw new Error('Failed to load messages');

            const messages = await response.json();
            chatBox.innerHTML = '';

            messages.forEach(message => {
                appendMessage(message, message.sender_id === {{ auth()->id() }});
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

            if (!response.ok) throw new Error('Failed to send message');

            const data = await response.json();
            appendMessage(data, true);
            this.reset();

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });

    loadMessages({{ $receiverId }});
});
</script>

@endsection
