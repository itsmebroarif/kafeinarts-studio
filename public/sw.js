// Self-uninstalling Service Worker to clean up cache bugs and unregister PWA caching
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('Cleaning up cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
    .then(() => {
      console.log('Unregistering service worker...');
      return self.registration.unregister();
    })
    .then(() => self.clients.matchAll())
    .then(clients => {
      clients.forEach(client => {
        if (client.url) {
          console.log('Refreshing client:', client.url);
          client.navigate(client.url);
        }
      });
    })
  );
});
