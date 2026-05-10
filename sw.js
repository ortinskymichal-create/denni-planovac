const CACHE_NAME = 'planovac-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// Instalace a uložení do paměti
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Zajištění chodu i bez internetu
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
