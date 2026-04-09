const CACHE_NAME = "v1";

const ASSETS_TO_CACHE = [
  "./",
//  "./index.html",
//  "/offline.html",
//  "./manifest.json",

//  "./main.js",

  // "/src/styles/reset.css",
  // "/src/styles/variables.css",
  // "/src/styles/main.css"
];

// Установка Service Worker
self.addEventListener("install", event => {
  console.log("Service Worker installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Активация (очистка старых кэшей)
self.addEventListener("activate", event => {
  console.log("Service Worker activating...");

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
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
          // return caches.match("/offline.html");
          return caches.match("/index.html");
        }
      });
    })
  );
});
