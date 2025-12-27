const CACHE_NAME = 'practicals';
const ASSETS = [
  'index.html',
  'style.css',
  'homeTab.css',
  'settingsTab.css',
  'script.js',
  'homeTab.js',
  'settingsTab.js',
  'src/logo.svg'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept requests to serve from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});