'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bd585f8980a8f84bf85f3407769a4873",
"assets/AssetManifest.bin.json": "1e12dd81374f25ba164b7a50288feb55",
"assets/AssetManifest.json": "06fdfcc70f3a453d92d7bb542430af57",
"assets/Assets/Animation/intro_long.json": "881584cf726cd6be11985cc1d8e1506c",
"assets/Assets/Animation/Splash.lottie": "bc4d5f129fb4523340afb053dcb50662",
"assets/Assets/Fonts/HelveticaNeueCondensedBold.ttf": "ca6345e644cdb78446146737600c9ed0",
"assets/Assets/Fonts/HelveticaNeueLight.ttf": "9ce6b81d106aef68f9250c9247cf1d71",
"assets/Assets/Fonts/HelveticaNeueUltraLight.ttf": "5317c1455a445e0b6069cf091c4dd64d",
"assets/Assets/Fonts/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/Assets/Fonts/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/Assets/Fonts/NotoSans_SemiCondensed-Regular.ttf": "cf37ab7c1275cd77066ffdab71761a08",
"assets/Assets/Fonts/NotoSans_SemiCondensed-SemiBold.ttf": "8aad5697ec74d04935d7303d028c0924",
"assets/Assets/Images/icon1.jpg": "edd38d7371e389a20e031f15ce8fa507",
"assets/Assets/Images/icon2.jpg": "1f2f50c1526a1a521d7c7019e3c02c24",
"assets/Assets/Images/icon3.jpg": "fb98912a700d16e2dd97af0e63f4ab0a",
"assets/Assets/Images/icon4.jpg": "6b38ed51bab33d6fbec0d273b2acc099",
"assets/Assets/Images/icon5.png": "1e6a0ff77d8ebc297b75070f51e8f34d",
"assets/Assets/Images/Icons/dob.jpg": "c53f563f258e5032a9d31d295908cfa5",
"assets/Assets/Images/Icons/fullstop.png": "948231bdd09e05c3de2830050e8a8a6e",
"assets/Assets/Images/Icons/hero_quotation.png": "97bdc3914d6ad3ae31eaabd7b8cf7177",
"assets/Assets/Images/Icons/jp_infra.jpg": "1fea76a78e23b17f39a12b3d112a260b",
"assets/Assets/Images/Icons/ktm.png": "ed682223012d332a73a2fc77a2db38ad",
"assets/Assets/Images/Icons/puc.png": "c7156b23943c9b1d6eeaedf3b163bf55",
"assets/Assets/Images/Icons/rojmel.png": "545e75f90a464b7ab146cd453c89dcda",
"assets/Assets/Images/Icons/swagaar.png": "75f93db44ac502d5f5dfcac2a71ae707",
"assets/Assets/Images/Icons/techfirst_crm.png": "669dcacfc6cf7ac23d0fc1a953721a51",
"assets/Assets/Images/Icons/vigor.png": "d2a102fbc3406edf6ef5e724ded26efb",
"assets/Assets/Images/profile1.jpeg": "ac1751aaab445588be1546ddaacba7d2",
"assets/Assets/Images/profile2.jpeg": "5c0de03254f565c51313d931e90b0fad",
"assets/FontManifest.json": "985cf6e4343a4297e051cf212351ed1f",
"assets/fonts/MaterialIcons-Regular.otf": "5c02fd214cbb7b177fc1578db8dcd153",
"assets/NOTICES": "89d0da3097805e3cd44b56b619692ebb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b3c28296f03e6badf0cb1a8349a8d5b6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "034d77adaab86ec99a590607adf1bab7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9bb0b5abb892221925819e805d223ac9",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "d935299e773d7f84c35d19911e466578",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "a99dd178f602a0c486ca2299a9ca9b1b",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "2cdcec8b1f60fde352b7799951b071a1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "f60046245192c7141a4f3f08cb17fc59",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "954abb69395b8bed50cf076b7af3afc8",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "c40cc5b3828ae2e9f5575c74d131c3f3",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "5f38246e98b39a8d7d70ef316ad2af78",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5024ba30ebb4d5232325b89cbc436452",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b0c81f5ca0c4661a8401f79123d3913e",
"icons/Icon-192.png": "ba784a5aa95da7f43e52acd515e7c333",
"icons/Icon-512.png": "b9391b7fa781aa56406c65668c410e8d",
"icons/Icon-maskable-192.png": "ba784a5aa95da7f43e52acd515e7c333",
"icons/Icon-maskable-512.png": "b9391b7fa781aa56406c65668c410e8d",
"index.html": "235853e8b076092f4aef88bfa4cabd36",
"/": "235853e8b076092f4aef88bfa4cabd36",
"main.dart.js": "97f47e63c36899c68a3dd22401df6117",
"manifest.json": "2e2156066e3f5a4c7bc336cbdabfa541",
"version.json": "1f01520f43d5fd7d07ec3bb4ddc63162"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
