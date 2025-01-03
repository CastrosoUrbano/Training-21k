// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/script.js',
        '/manifest.json',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]);
    })
  );
});

// Interceptar las solicitudes de la red y servir desde la caché si está disponible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devuelve la respuesta de la caché o haz una nueva solicitud si no está en caché
      return response || fetch(event.request);
    })
  );
});
