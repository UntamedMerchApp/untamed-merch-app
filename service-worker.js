const REDIRECT_URL = "https://untamed-fitness-training.printify.me/";

// Ensure SW takes control immediately
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Delay redirect so splash screen can show
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === "/" || url.pathname === "/index.html") {
    event.respondWith(
      (async () => {
        // Wait 2000ms before redirect
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return Response.redirect(REDIRECT_URL);
      })()
    );
    return;
  }

  event.respondWith(fetch(event.request));
});
