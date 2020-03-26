'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "9104ede5e9165be0aed3e14525cdeaef",
"/main.dart.js": "0a6e396d6357fb3ae805e15ecd6ceab4",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "8c189cd22f18289da34b642014992817",
"/assets/LICENSE": "117087a03a7164a5668aeefde29060bd",
"/assets/AssetManifest.json": "9e931c401a39e1e743c7ed0a7ef21671",
"/assets/FontManifest.json": "3b425e2f698952f29bb78e3007676a64",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/background.png": "a5c631af551d21d3683a6a9e4c51cbf5",
"/assets/assets/Nunito.ttf": "65bb0a158ee1967292ee4d11079d45ae",
"/assets/assets/logo.png": "4231452532b8e057f50fb9457b8312b2",
"/assets/assets/alucard.jpg": "13901053e0bb41ffd954addd234848f6",
"/assets/assets/background-2.png": "490d2a692d5d9853aeca3ffe0ec76d4c"
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
