'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a724ecd04402fc183cb4f3cc078d93b9",
"/main.dart.js": "e269bcd8d36fce9b196f8344bcbeb635",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "08e063dcad117ac2c2cf0e73ea00e268",
"/assets/LICENSE": "e08bc69162e5d0d0164b9690dc77ab1b",
"/assets/AssetManifest.json": "8f082de8617cf533042761adf8fe7c21",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/location.jpeg": "19c4e4e5c9d7c663cead257236dc9541",
"/assets/assets/trophy.png": "a8b3db3405117366b30356aacf64490a",
"/assets/assets/food_sample.jpeg": "4f954873e6f49c0df862450c5e2fd464"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
