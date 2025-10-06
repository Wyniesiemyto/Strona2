/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope;
export {};

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST || []);

// Install / Activate
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.clients.claim();
    await cleanupOutdatedCaches();

    const expectedCaches = [
      'pages-cache',
      'google-fonts-stylesheets',
      'google-fonts-webfonts',
    ];

    const keys = await caches.keys();
    await Promise.all(
      keys.map((key) => {
        if (!expectedCaches.includes(key) && !key.startsWith('workbox-precache')) {
          return caches.delete(key);
        }
        return Promise.resolve();
      })
    );
  })());
});

// Odbieranie wiadomości z aplikacji
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Routing / caching
registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'pages-cache',
    networkTimeoutSeconds: 3,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new NetworkFirst({
    cacheName: 'google-fonts-stylesheets',
  })
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365,
      }),
    ],
  })
);
