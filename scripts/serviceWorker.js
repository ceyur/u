// const version = "v1";
// const files = [
//  "./",
//  "./index.html",
//  "./styles/styles.css",
//  "./scripts/scripts.js",
//  "./scripts/properties.js",
//  "./manifest.json"
// ];

// self.addEventListener("install", e => {
//   e.waitUntil(
//     caches.open(version).then(c => {
//       const requests = files.map(url => new Request(url, { cache: "reload" }));
//       return c.addAll(requests);
//     })
//   );
//   self.skipWaiting();
//   console.log("Service Worker ", version, " installing...");
// });

// self.addEventListener("activate", e => {
//   e.waitUntil(
//     caches.keys().then(keys => {
//       return Promise.all(
//         keys.map(k => {
//           if (k !== version) {
//             return caches.delete(k);
//           }
//         })
//       );
//     })
//   );
//   self.clients.claim();
//   console.log("Service Worker ", version, " activating...");
// });

// self.addEventListener("fetch", e => {
//   e.respondWith(
//     caches.match(e.request, { ignoreSearch: true }).then(r => {
//       if (r) {
//         return r;
//       }
//       return fetch(e.request).catch(() => {
//         if (e.request.mode === "navigate") {
//           return caches.match("./index.html", { ignoreSearch: true });
//         }
//       });
//     })
//   );
// });

const version = "v1";
const files = [
 "/u/",
 "/u/index.html",
 "/u/styles/styles.css",
 "/u/scripts/scripts.js",
 "/u/scripts/properties.js",
 "/u/manifest.json"
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
