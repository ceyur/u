const version = "v1";
const files = [
 // "./",
 // "./index.html",
 // "./css/styles.css",
 // "./scripts.js",
 // "./manifest.json",
 //  "./properties.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(version).then(c => c.addAll(files)));
  console.log("Service Worker ", version, " installing...");
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(k => {
          if (k !== version) {
            return caches.delete(k);
          }
        })
      );
    })
  );
  console.log("Service Worker ", version, " activating...");
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      if (r) {
        return r;
      }

      return fetch(e.request).catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
