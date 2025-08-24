export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/private/", "/api/", "/admin/"],
		},
		sitemap: "https://fullstack-sample-rosy.vercel.app/sitemap.xml",
		host: "https://fullstack-sample-rosy.vercel.app",
	};
}
