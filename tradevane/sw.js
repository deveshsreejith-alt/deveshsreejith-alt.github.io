const C='tradevane-3342339';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./", "./icon-192.png", "./icon-512.png", "./icon-180.png", "./index.html", "./manifest.webmanifest", "./assets/index-INVk0QYq.js", "./assets/index-CTVmp7d4.css"])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{caches.open(C).then(c=>c.put('./index.html',r.clone()));return r}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{if(r.ok){const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl))}return r})))});
