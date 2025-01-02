import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Assure-toi que Pusher est correctement initialisé
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
});

// Écoute l'événement "MessageSent" sur le canal 'messages.{receiver_id}'
window.Echo.channel('messages.' + receiverId)
    .listen('MessageSent', (event) => {
        // Ajouter le message au chat en temps réel
        console.log('New message:', event.message);
        appendMessage(event.message, event.message.sender_id === authUserId);
    });
