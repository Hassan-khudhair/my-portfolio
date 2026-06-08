/**
 * Service Worker — Cache-first with network fallback.
 * iOS Safari notes:
 *  - Supported since iOS 11.3
 *  - Cache is cleared when "Clear History & Website Data" is used
 *  - ~50 MB storage limit per origin
 *  - No beforeinstallprompt; users must manually "Add to Home Screen"
 */

const CACHE_NAME = 'portfolio-v2';

// Pre-cache just the shell; everything else is cached on first visit
const PRECACHE_URLS = ['/'];

// ── Install ─────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// ── Activate: remove old caches ─────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
  );
  self.clients.claim();
});

// ── Fetch ────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests from the same origin
  if (request.method !== 'GET') return;
  if (!request.url.startsWith(self.location.origin)) return;

  // Skip chrome-extension / non-http requests
  if (!request.url.startsWith('http')) return;

  // For navigation requests (HTML pages) use network-first so
  // the user always gets fresh content when online
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  // For static assets (JS, CSS, images, fonts) use cache-first
  event.respondWith(cacheFirst(request));
});

// ── Strategies ───────────────────────────────────────────────────

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline — serve from cache if available
    const cached = await caches.match(request);
    return cached || caches.match('/');
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      // Don't cache opaque responses (cross-origin w/o CORS)
      if (response.type !== 'opaque') {
        cache.put(request, response.clone());
      }
    }
    return response;
  } catch {
    // Return a minimal offline fallback for images
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    return new Response('Offline', { status: 503 });
  }
}
