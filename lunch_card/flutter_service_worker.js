'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8f082de8617cf533042761adf8fe7c21",
"assets/assets/food_sample.jpeg": "4f954873e6f49c0df862450c5e2fd464",
"assets/assets/location.jpeg": "19c4e4e5c9d7c663cead257236dc9541",
"assets/assets/trophy.png": "a8b3db3405117366b30356aacf64490a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "76de9f316a5ae6e34a37e649bb2aa3c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "70dfd0623e298b50205a78c9288a6726",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-144x144.png": "af0d178c47fa91ca57eed8884aecfb98",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-192x192.png": "82e9ff360b4ee5eece60a08d08f46bdb",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-36x36.png": "995385ff477baadc0b80a1193ede5fb9",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-48x48.png": "dd5f3a72050d267e721a954e1e37b9de",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-72x72.png": "e05c7509e24b4b278ac7ec1c62cd139f",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/android-icon-96x96.png": "8ede8b296f02ed3ce9b9794b0f07acbe",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-114x114.png": "97d6b0ef9b1e5142a976f74d2044ea61",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-120x120.png": "2f31e76c036925c673e09ace4791af49",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-144x144.png": "af0d178c47fa91ca57eed8884aecfb98",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-152x152.png": "d6068b5176fd26a3bf38e4edd72273c5",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-180x180.png": "02fc19e7af2b71b65c3e3d9fce066f31",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-57x57.png": "53a30aa1a9d78fcb37abaa4893a16bbe",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-60x60.png": "c6e23100fad668d454d28d9e23c110d4",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-72x72.png": "e05c7509e24b4b278ac7ec1c62cd139f",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-76x76.png": "8fb9805a03f7a0cdcbe429c3c7ea2002",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon-precomposed.png": "6b7fae19558acf89fe4fc0a79abe83c2",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/apple-icon.png": "6b7fae19558acf89fe4fc0a79abe83c2",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/favicon-16x16.png": "70dfd0623e298b50205a78c9288a6726",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/favicon-32x32.png": "4b01e4b83df5a37df8555d4d72b739b4",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/favicon-96x96.png": "8ede8b296f02ed3ce9b9794b0f07acbe",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/favicon.ico": "16def2bb47521de89a4c0df194bf88e2",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/ms-icon-144x144.png": "af0d178c47fa91ca57eed8884aecfb98",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/ms-icon-150x150.png": "096cb128270e3c015eb45ff97c6b779c",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/ms-icon-310x310.png": "62903127bf6997aad082c2741b0d6b24",
"icons/2dc93cc245dc08576bd008fc3773aeeb.ico/ms-icon-70x70.png": "34d11bf96617636392cdd2bcd9d9b545",
"icons/Icon-192.png": "6b7fae19558acf89fe4fc0a79abe83c2",
"index.html": "874a49f6af16733eaed28b370223d769",
"/": "874a49f6af16733eaed28b370223d769",
"main.dart.js": "3058dbaaaf16ff22ba7d672e44e04312",
"manifest.json": "fdf29c499718f971e374b1965bc1550b",
"version.json": "698be64d7e08c15fb13defc0aa655ed6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
