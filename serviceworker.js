
const filesToCache = [
    'http://localhost:1234/CPS/',
    'http://localhost:1234/CPS/index.html',
    'http://localhost:1234/CPS/js/cat_facts.js',
    'http://localhost:1234/CPS/js/comparison.js',
    'http://localhost:1234/CPS/images/cat.jpg',
    'http://localhost:1234/CPS/images/cat2.jpg',
    'http://localhost:1234/CPS/images/cat.png',
    'http://localhost:1234/CPS/css/styles.css',

]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('staticFiles-0.0.1')
            .then(cache => {
                return cache.addAll(filesToCache)
            })
    )
})

self.addEventListener("fetch", event => {
    if (filesToCache.includes(event.request.url)) {
        event.respondWith(
            caches.match(event.request)
                .then(function (response) {
                    if (response) {
                        return response;
                    } else {
                        return fetch(event.request);
                    }
                })
        )
    }
})