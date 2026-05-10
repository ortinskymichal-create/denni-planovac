self.addEventListener('install', (e) => {
    // Toto donutí prohlížeč okamžitě aktivovat novou verzi a zapomenout starou
    self.skipWaiting(); 
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Prohlížeč vyžaduje fetch event, i když je prázdný.
});
