const version = "v1";
const files = [
    "/u/index.html",
	"/u/manifest.json",
	"/u/styles/styles.css",
	"/u/scripts/scripts.js",
	"/u/scripts/properties.js",
	"/u/img/new.svg"
];

self.addEventListener("install", e => {
	e.waitUntil(
		caches.open(version).then(cache => Promise.all(
			files.map(url =>
				fetch(url).then(resp => {
					if (!resp.ok) {
						throw new Error(`Не удалось получить ${url}: статус ${resp.status}`);
					}
					return cache.put(url, resp.clone());
				})
			)
		).then(() => {
			console.log("Service Worker", version, "установлен");
			return self.skipWaiting();
		}).catch(err => {
			console.error("Ошибка при установке Service Worker", version, ":", err);
			throw err;
		}))
	);
});

self.addEventListener("activate", e => {
	e.waitUntil(
		Promise.all([
			caches.keys().then(keys => Promise.all(
				keys.map(k => k !== version && caches.delete(k)))
			),
			self.clients.claim()
		]).then(() => {
			console.log("Service Worker", version, "активирован");
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(r => {
			if (r && r.ok) {
				return r;
			}
			return fetch(e.request).catch(() => {
				if (e.request.mode === "navigate") {
					return caches.match("/u/index.html").then(fb =>
						fb || new Response("<h1>Нет интернета</h1>", {
							status: 200,
							headers: { "Content-Type": "text/html" }
						})
					);
				}
				return new Response("", { status: 504 });
			});
		})
	);
});
