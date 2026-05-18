/*  Kfkendo Beauty — Service Worker v2
    Pre-caches images on install so they are available
    from the very first page load, no flashing.          */

const CACHE_NAME = 'kfkendo-v2'

// List every image you have here — they get cached immediately
// on install before the user even sees the page
const PRE_CACHE = [
  '/',
  '/index.html',
  '/images/hero-image.jpg',
  '/images/hairs.jfif',
  '/images/fingernail.jfif',
]

// ── Install: download and store everything in PRE_CACHE ──────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE)
    })
  )
  self.skipWaiting()
})

// ── Activate: delete old caches ───────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

// ── Fetch: cache-first for images and fonts ───────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (url.origin !== self.location.origin) return

  const isImage = request.destination === 'image' ||
    /\.(jpg|jpeg|png|webp|avif|svg|gif)$/i.test(url.pathname)

  const isFont = request.destination === 'font' ||
    url.hostname === 'fonts.gstatic.com'

  if (isImage || isFont) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request)
        if (cached) {
          return cached
        }
        try {
          const response = await fetch(request)
          if (response.ok) {
            cache.put(request, response.clone())
          }
          return response
        } catch {
          return new Response('', { status: 408 })
        }
      })
    )
    return
  }

  // HTML, JS, CSS — network first, cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  )
})