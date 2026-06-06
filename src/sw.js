const CACHE_NAME = "practicals";
const ASSETS = [
  "public/logo.svg",
  "index.html",
  "src/style.css",
  "src/script.js",
  "src/home/homeTab.css",
  "src/home/homeTab.js",
  "src/settings/settingsTab.css",
  "src/settings/settingsTab.js",
];

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }),
  );
});

// Intercept requests to serve from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
