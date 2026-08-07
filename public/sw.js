const CACHE_NAME = 'r06-portfolio-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Ignore non-HTTP requests (like chrome-extension://)
  if (!event.request.url.startsWith('http')) return;

  // Pass-through fetch handler to satisfy PWA installability requirements
  event.respondWith(
    fetch(event.request).catch((err) => {
      // Return network response directly, or catch offline cases
      return new Response("Offline", { status: 503, statusText: "Offline" });
    })
  );
});
