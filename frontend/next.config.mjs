/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{ source: "/api/:path*", destination: "http://localhost:8080/:path*" },
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "flagcdn.com",
				pathname: "/w320/**",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
