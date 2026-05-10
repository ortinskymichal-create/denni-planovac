self.addEventListener('install', (e) => {
    console.log('Service Worker nainstalován');
});
self.addEventListener('fetch', (e) => {
    // Zatím jen propouští síťový provoz
});
