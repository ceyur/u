const cacheName = "v1";
const filesForCache = [
//  "./",
//  "./index.html",
//  "./css/styles.css",
//  "./scripts.js",
//  "./manifest.json",
  "./properties.json"
];

// Установка Service Worker
self.addEventListener("install", event => {
  console.log("Service Worker ", cacheName, " installing...");

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesForCache);
    })
  );
});

// Активация (очистка старых кэшей)
self.addEventListener("activate", event => {
  console.log("Service Worker ", cacheName, " activating...");

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Перехват запросов (fetch)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Если есть в кэше — возвращаем
      if (response) {
        return response;
      }

     // Иначе пробуем из сети
      return fetch(event.request).catch(() => {
        // Если нет интернета — показываем offline страницу
        if (event.request.mode === "navigate") {
          return caches.match("/index.html");
        }
      });
    })
  );
});
