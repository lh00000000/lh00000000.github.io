const CACHE_VERSION = 'v2';
const RUNTIME_CACHE = 'bday34-runtime-' + CACHE_VERSION;

// These placeholders will be replaced by the build script
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './assets/index-CKYhrtQs.js',
  './assets/index-B0mmezy0.css',
  './vite.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      try {
        await cache.addAll(PRECACHE_ASSETS);
      } catch (_) {
        // Ignore failures during install; runtime caching will fill in
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key.startsWith('bday34-runtime-') && key !== RUNTIME_CACHE) {
            return caches.delete(key);
          }
          return undefined;
        })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const origin = self.location.origin;
  const basePath = new URL('./', self.location).pathname; // e.g., '/bday34/'
  const assetsPrefix = basePath + 'assets/';

  // Handle navigations: serve index.html offline
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(event.request);
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put(basePath + 'index.html', networkResponse.clone());
          return networkResponse;
        } catch (_) {
          const cache = await caches.open(RUNTIME_CACHE);
          const cached = await cache.match(basePath + 'index.html') || await cache.match('./index.html');
          if (cached) return cached;
          return new Response('<h1>Offline</h1>', { headers: { 'Content-Type': 'text/html' } });
        }
      })()
    );
    return;
  }

  // Cache-first for static assets within this subpath
  if (
    url.origin === origin && (
      url.pathname.startsWith(assetsPrefix) ||
      url.pathname === basePath + 'vite.svg'
    )
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const response = await fetch(event.request);
          cache.put(event.request, response.clone());
          return response;
        } catch (err) {
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        }
      })()
    );
    return;
  }

  // Default: try network, fall back to cache
  event.respondWith(
    (async () => {
      try {
        return await fetch(event.request);
      } catch (_) {
        const cache = await caches.open(RUNTIME_CACHE);
        const cached = await cache.match(event.request);
        if (cached) return cached;
        throw _;
      }
    })()
  );
});