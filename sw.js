// This file makes the app "installable"
self.addEventListener('install', (e) => {
    console.log('App Installed');
});

self.addEventListener('fetch', (e) => {
    // This allows the app to work offline by checking cache
    e.respondWith(fetch(e.request));
});