'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06354e29210c65ce34487e67aa5c7934",
"version.json": "1f01520f43d5fd7d07ec3bb4ddc63162",
"index.html": "8cd360cdbee1099a9ac22d0b91d16640",
"/": "8cd360cdbee1099a9ac22d0b91d16640",
"main.dart.js": "7f6cf806aa622d21922de8343767b60e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5024ba30ebb4d5232325b89cbc436452",
"icons/Icon-192.png": "ba784a5aa95da7f43e52acd515e7c333",
"icons/Icon-maskable-192.png": "ba784a5aa95da7f43e52acd515e7c333",
"icons/Icon-maskable-512.png": "b9391b7fa781aa56406c65668c410e8d",
"icons/Icon-512.png": "b9391b7fa781aa56406c65668c410e8d",
"manifest.json": "58d9ff36c51817625a6d7a62376b7093",
"assets/AssetManifest.json": "06fdfcc70f3a453d92d7bb542430af57",
"assets/NOTICES": "45b021938ce4b20d41ae11ecd635abb6",
"assets/FontManifest.json": "33d1b10a233d00debb75c5b6caec979e",
"assets/AssetManifest.bin.json": "1e12dd81374f25ba164b7a50288feb55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9bb0b5abb892221925819e805d223ac9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "034d77adaab86ec99a590607adf1bab7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b3c28296f03e6badf0cb1a8349a8d5b6",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "d12b1a40489d6b50f0363df6f0d6d092",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "8242e3c2ccae9cedc14213f26454410d",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "5d5f12dc9e2d93e421626ce82745b3a5",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "5ef7ed6d126034fa4d549208d1490814",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "f2578f0d282fc7091553c613d78f36a3",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "8909e18b2d34b952b6ef8b911c1f1cae",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "3c46ff7515368b68e570ce96901ccc24",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bd585f8980a8f84bf85f3407769a4873",
"assets/fonts/MaterialIcons-Regular.otf": "5c02fd214cbb7b177fc1578db8dcd153",
"assets/Assets/Images/profile1.jpeg": "ac1751aaab445588be1546ddaacba7d2",
"assets/Assets/Images/icon1.jpg": "edd38d7371e389a20e031f15ce8fa507",
"assets/Assets/Images/icon3.jpg": "fb98912a700d16e2dd97af0e63f4ab0a",
"assets/Assets/Images/icon2.jpg": "1f2f50c1526a1a521d7c7019e3c02c24",
"assets/Assets/Images/Icons/hero_quotation.png": "97bdc3914d6ad3ae31eaabd7b8cf7177",
"assets/Assets/Images/Icons/techfirst_crm.png": "669dcacfc6cf7ac23d0fc1a953721a51",
"assets/Assets/Images/Icons/jp_infra.jpg": "1fea76a78e23b17f39a12b3d112a260b",
"assets/Assets/Images/Icons/dob.jpg": "c53f563f258e5032a9d31d295908cfa5",
"assets/Assets/Images/Icons/swagaar.png": "75f93db44ac502d5f5dfcac2a71ae707",
"assets/Assets/Images/Icons/puc.png": "c7156b23943c9b1d6eeaedf3b163bf55",
"assets/Assets/Images/Icons/fullstop.png": "948231bdd09e05c3de2830050e8a8a6e",
"assets/Assets/Images/Icons/vigor.png": "d2a102fbc3406edf6ef5e724ded26efb",
"assets/Assets/Images/Icons/rojmel.png": "545e75f90a464b7ab146cd453c89dcda",
"assets/Assets/Images/Icons/ktm.png": "ed682223012d332a73a2fc77a2db38ad",
"assets/Assets/Images/icon5.png": "1e6a0ff77d8ebc297b75070f51e8f34d",
"assets/Assets/Images/icon4.jpg": "6b38ed51bab33d6fbec0d273b2acc099",
"assets/Assets/Images/profile2.jpeg": "5c0de03254f565c51313d931e90b0fad",
"assets/Assets/Animation/Splash.lottie": "bc4d5f129fb4523340afb053dcb50662",
"assets/Assets/Animation/intro_long.json": "881584cf726cd6be11985cc1d8e1506c",
"assets/Assets/Fonts/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/Assets/Fonts/NotoSans_SemiCondensed-Regular.ttf": "cf37ab7c1275cd77066ffdab71761a08",
"assets/Assets/Fonts/NotoSans_SemiCondensed-SemiBold.ttf": "8aad5697ec74d04935d7303d028c0924",
"assets/Assets/Fonts/HelveticaNeueLight.ttf": "9ce6b81d106aef68f9250c9247cf1d71",
"assets/Assets/Fonts/HelveticaNeueUltraLight.ttf": "5317c1455a445e0b6069cf091c4dd64d",
"assets/Assets/Fonts/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/Assets/Fonts/HelveticaNeueCondensedBold.ttf": "ca6345e644cdb78446146737600c9ed0",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
