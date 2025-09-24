/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
			},
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
