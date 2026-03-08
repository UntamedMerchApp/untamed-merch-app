const REDIRECT_URL = "https://untamed-fitness-training.printify.me/";

// Install immediately
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Take control immediately
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Redirect logic with 3-second cinematic delay
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Root shell (with or without query params)
  const isRoot =
    url.origin === self.location.origin &&
    (url.pathname === "/" || url.pathname === "/index.html");

  if (isRoot) {
    event.respondWith(
      (async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return Response.redirect(REDIRECT_URL);
      })()
    );
    return;
  }

  // Default fetch
  event.respondWith(fetch(event.request));
});
