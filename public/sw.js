/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */

'use-strict';

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

const version = 2;
const CACHE_NAME = `thediceage-v${version}`;
const urlsToCache = [
    '/site.webmanifest',
    '/favicon-32x32.png',
    '/favicon-16x16.png',
    '/posts/Star%20Realms',
    '/api/game/getGames',
];

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    new RegExp('/api/game'),
    new StaleWhileRevalidate(),
);

registerRoute(
    new RegExp('/posts/'),
    new CacheFirst({
        cacheName: CACHE_NAME,
    }),
);

registerRoute(
    ({ request }) => request.destination === 'image',
   new StaleWhileRevalidate(),
);


self.addEventListener('install', onInstall);
self.addEventListener('activate', OnActivate);

// *******************************************************************

async function onInstall() {
    console.log(`Service worker (${version}) installed`);
    self.skipWaiting();
}

function OnActivate(evt) {
    evt.waitUntil(handleActivation()); // browser will wait if client is closed while loading resources
}

async function handleActivation() {
    await clearCaches();
    await cacheStarterFiles();
    await clients.claim(); // will sync all clients e.g if you have multiple tabs open
    console.log(`Service worker (${version}) is activate`);
}

async function clearCaches() {
    const cacheNames = await caches.keys();
    const oldCacheNames = cacheNames.filter((name) => {
        if (/^thediceage-v\d/.test(name)) {
            let [, cacheVersion] = name.match(/^thediceage-v(\d+)$/);
            cacheVersion = (cacheVersion != null) ? Number(cacheVersion) : cacheVersion;
            return (
                cacheVersion > 0
                && cacheVersion !== version
            );
        }
        return false;
    });
    return Promise.all(
        oldCacheNames.map((cacheName) => {
            return caches.delete(cacheName);
        }),
    );
}

// eslint-disable-next-line no-unused-vars
async function cacheStarterFiles() {
    const cache = await caches.open(CACHE_NAME);

    return Promise.all(
        urlsToCache.map(async (url) => {
            try {
                const fetchOptions = {
                    method: 'GET',
                    cache: 'no-cache',
                    credentials: 'omit',
                };

                const res = await fetch(url, fetchOptions);
                if (res.ok) {
                    await cache.put(url, res.clone());
                }
            } catch (err) { console.error('Failed loading starter files', err); }
        }),
    );
}
