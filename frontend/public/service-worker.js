const APP_VERSION = '1.0.0';
const CACHE_NAME = `medicalchain-${APP_VERSION}`;
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/static/js/main.js',
          '/static/css/main.css'
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  // Ne pas intercepter les requêtes non-GET ou externes
  if (event.request.method !== 'GET' || 
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Renvoyer le cache si disponible
        if (cachedResponse) {
          return cachedResponse;
        }

        // Sinon aller sur le réseau
        return fetch(event.request)
          .catch(() => {
            // Fallback pour les pages
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});