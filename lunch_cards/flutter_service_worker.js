'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "8c51bf585329bb5bd9a7a4861adff63b",
"/main.dart.js": "4deb6405b723069cb4c5e9bc04fb1489",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "60e521954e351f0bab4713bb9f017161",
"/assets/LICENSE": "d51b54977a83d3f9dd137457381ef831",
"/assets/AssetManifest.json": "81f2c01d09990e38898d7b82355cfb8a",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/img5.jpg": "22ff9ecf7e83e8de8221d0e758c4e52d",
"/assets/assets/img4.jpg": "9347b7300cf28048ebab08b5681551eb",
"/assets/assets/img3.jpg": "c5b21f94380190eedbf32b9878ffe4c9",
"/assets/assets/img2.jpg": "6341b408e33e8c7f9d046212848ac080",
"/assets/assets/img1.jpg": "3bded6f9e9288b75da1994118d8fd6a8",
"/assets/assets/dfmc/common.jpeg": "748b37f48efc2d26fd75eb23900b1a80",
"/assets/assets/dfmc/common-7.jpeg": "39f11c781646a54f60debdde5254c1ab",
"/assets/assets/dfmc/common-10.jpeg": "f79da971c67699a6c75402454c91cb9c",
"/assets/assets/dfmc/common-11.jpeg": "5c6f558730ed56f5963e248bf33176e0",
"/assets/assets/dfmc/common-6.jpeg": "bf7abd5b717127821a69ddfd399cc6cf",
"/assets/assets/dfmc/common-9.jpeg": "314b559989feb62e85ee2fbd5e817075",
"/assets/assets/dfmc/common-5.jpeg": "34b999106928c67eb16466f574468e5c",
"/assets/assets/dfmc/common-4.jpeg": "46117f4982a3c65533e43d091203a221",
"/assets/assets/dfmc/common-8.jpeg": "180f396edba48fd3220c736ac970cba3",
"/assets/assets/dfmc/common-3.jpeg": "cf01bc4c5c7e523bbb6cba1ba5eea363",
"/assets/assets/dfmc/common-2.jpeg": "a8e51c7f7a7136f9050aad113dcb9e87",
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
