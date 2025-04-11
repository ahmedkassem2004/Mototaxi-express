self.addEventListener("install", e => {
  console.log("Service Worker instalado");
  e.waitUntil(
    caches.open("mototaxi-cache").then(cache => {
      return cache.addAll(["/", "/index.html", "/logo.png", "/Rueda.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});