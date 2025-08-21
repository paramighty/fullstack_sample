export default function manifest() {
	return {
		name: "Minority travel buddy page",
		short_name: "Travel App",
		description:
			"A website created in Next.js to help people know about different countries",
		id: "/?source=pwa",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		theme_color: "#FFFFF",
		hreflang: "en",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
			{
				src: "/maskable_icon.png",
				sizes: "96x96",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
