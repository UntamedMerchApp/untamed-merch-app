const REDIRECT_URL = "https://untamed-fitness-training.printify.me/";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Redirect ONLY the shell (index.html) to your store
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // If user opens the PWA shell, redirect to Printify
  if (url.pathname.endsWith("/untamed-merch-app/") || url.pathname.endsWith("/untamed-merch-app/index.html")) {
    event.respondWith(Response.redirect(REDIRECT_URL));
    return;
  }

  // Otherwise fetch normally
  event.respondWith(fetch(event.request));
});
