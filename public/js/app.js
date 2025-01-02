// Importation de bootstrap et des bibliothèques locales
import './bootstrap';
import Alpine from 'alpinejs';
import { createApp } from 'vue';
import Chat from './components/Chat.vue';

// Configuration Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Configuration Vue.js
const app = createApp({});
app.component('chat', Chat);

// Monte l'application Vue uniquement si l'élément #chat existe
if (document.getElementById('chat')) {
    app.mount('#chat');
}

// Leaflet et géomapping
import L from 'leaflet';
import 'leaflet-routing-machine';

// OpenRouteService API
import * as OpenRouteService from 'openrouteservice-js';

// Gestion de l'affichage du mot de passe
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

if (togglePassword && passwordField && eyeIcon) {
    togglePassword.addEventListener('click', function () {
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        eyeIcon.classList.toggle('bi-eye-slash');
        eyeIcon.classList.toggle('bi-eye');
    });
}

// Gestion des messages d'erreur personnalisés
const customErrorMessage = document.getElementById('customErrorMessage');
if (customErrorMessage) {
    setTimeout(() => {
        customErrorMessage.style.display = 'none';
    }, 8000);
}
