// Minimal service worker for Hatim Takip.
// Its only real job is to satisfy Chrome's PWA installability criteria so
// that "Ana Ekrana Ekle" on Android creates a genuine installed app (WebAPK)
// instead of a plain browser bookmark. A real installed identity is required
// before Android will attach app badges / notification dots to the correct
// home-screen icon instead of Chrome's own icon.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request).catch(function(){ return new Response('', {status: 503}); }));
});
