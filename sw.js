const CACHE_NAME = 'friday-share-v2';
const FEED_PAGE = '/friday-share/';
const PRECACHE_ARTICLES = [
  '/friday-share/',
  '/friday-share/read/nvidia-gtc-2026/',
  '/friday-share/read/llms-vs-agi-a16z/',
  '/friday-share/read/morgan-stanley-ai-leap-2026/',
  '/friday-share/read/thailand-family-guide/',
  '/friday-share/read/tavns-stroke-rehabilitation/',
  '/friday-share/read/tavns-multiple-sclerosis/',
  '/friday-share/read/fermented-food-microbiome-stanford/',
  '/friday-share/read/tech-firms-diverging-ai/',
  '/friday-share/read/how-to-build-startup-2026/',
  '/friday-share/read/immorta-bio-lifespan-84/',
  '/friday-share/read/tavns-mci-dementia/',
  '/friday-share/read/tavns-mci-research/',
  '/friday-share/read/jeff-kaplan-blizzard-gaming/',
  '/friday-share/read/qasar-younis-physical-ai-revolution/',
  '/friday-share/read/stanford-gut-brain-cognitive-decline/',
  '/friday-share/read/max-hodak-bci-future/',
  '/friday-share/read/stratechery-higher-powers-lower-macs/',
  '/friday-share/read/hn-what-are-you-building-march-2026/',
  '/friday-share/read/netflix-interpositive-affleck/',
  '/friday-share/read/agent-safehouse/',
  '/friday-share/read/literate-programming-agent-era/',
  '/friday-share/read/saaspocalypse-buy-to-build/',
  '/friday-share/read/monday-ceo-saas-dead/',
  '/friday-share/read/china-brain-computer-interface/',
  '/friday-share/read/cable-caballero/',
  '/friday-share/read/means-and-meaning/',
  '/friday-share/read/great-differentiation/',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ARTICLES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        if (response.ok && event.request.url.includes('/friday-share/')) {
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
