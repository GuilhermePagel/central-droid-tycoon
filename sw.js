// Central Droid Tycoon: funciona sem internet depois da primeira visita.
const CACHE = "cdt-v0.4.1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png", "./icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Responde com o que está guardado e atualiza em segundo plano.
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(r, { ignoreSearch: true });
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
