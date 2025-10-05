import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';  // DODAJ

// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

// App shell routing
registerRoute(
  ({ request }) => request.mode === 'navigate',
  createHandlerBoundToURL('/index.html')
);

// Google Fonts CSS
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new NetworkFirst({
    cacheName: 'google-fonts-stylesheets'
  })
);

// Google Fonts webfonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new ExpirationPlugin({    // Użyj ExpirationPlugin
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365, 
      })
    ]
  })
);

// Dodaj inne reguły runtimeCaching...
