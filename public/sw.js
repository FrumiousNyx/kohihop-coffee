const CACHE_NAME = 'kohihop-v1';
const urlsToCache = [
  '/',
  '/menu',
  '/about',
  '/contact',
  '/storage'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache.map(url => new Request(url)));
    })
  );
});

// Fetch with caching strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version if available
      if (response) {
        return response;
      }

      // Otherwise fetch and cache
      return fetch(event.request).then((fetchResponse) => {
        // Clone the response
        const responseToCache = fetchResponse.clone();
        
        // Cache successful responses
        if (fetchResponse.ok && urlsToCache.some(url => fetchResponse.url.includes(url))) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        
        return responseToCache;
      });
    })
  );
});

// Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
