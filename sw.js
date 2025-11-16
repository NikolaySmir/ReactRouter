const staticCacheName = "static-site-v1";
const dynamicCacheName = "dynamic-site-v1";

const ASSETS = [
	"/",
	"/index.html",
	"/src/index.jsx",
	"/src/shared/assets",
	"/src/index.css",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(staticCacheName).then((cache) => cache.addAll(ASSETS))
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter(
							(key) =>
								key !== staticCacheName &&
								key !== dynamicCacheName
						)
						.map((key) => caches.delete(key))
				)
			)
	);
});

async function cacheFirstStrategy(request) {
	const cache = await caches.open(dynamicCacheName);
	const cached = await caches.match(request);

	if (cached) {
		return cached;
	}

	try {
		const response = await fetch(request);
		if (request.method === "GET") {
			await cache.put(request, response.clone());
		}
		return response;
	} catch (error) {
		return new Response("Network error occurred", {
			status: 408,
			headers: { "Content-Type": "text/plain" },
		});
	}
}

self.addEventListener("fetch", (event) => {
	event.respondWith(cacheFirstStrategy(event.request));
});
