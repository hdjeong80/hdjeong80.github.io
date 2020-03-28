'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "c05c46b7104838aee5aeba33ef3c5d4c",
"/main.dart.js": "9d010624408ae9c3adc24797c6846ce7",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "62660ef077acdd475dc45f5bc62baad7",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/AssetManifest.json": "80ec948a0ef5b31f9c10691bf30cdf3d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/img5.jpg": "22ff9ecf7e83e8de8221d0e758c4e52d",
"/assets/assets/img4.jpg": "9347b7300cf28048ebab08b5681551eb",
"/assets/assets/img3.jpg": "c5b21f94380190eedbf32b9878ffe4c9",
"/assets/assets/img2.jpg": "6341b408e33e8c7f9d046212848ac080",
"/assets/assets/img1.jpg": "3bded6f9e9288b75da1994118d8fd6a8",
"/assets/assets/avatars/avatar-1.jpg": "a834f9232d0ea4507bfdcf46ba69ab78",
"/assets/assets/avatars/avatar-2.jpg": "36dc1e866b30b68f446490f32d1a2113",
"/assets/assets/avatars/avatar-3.jpg": "5bcd881334bad5da1b5d159f45299d3c",
"/assets/assets/avatars/avatar-6.jpg": "bda39b2a012494c30d507dd92bdf8c78",
"/assets/assets/avatars/avatar-4.jpg": "0dae79bba26fcc67a1f7e1864620b710",
"/assets/assets/avatars/avatar-5.jpg": "357419a00605103373ee30a316abaa05"
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
