import { Suspense } from "react";
import Link from "next/link";

export const metadata = {
	title: "Help - Coming Soon | Minority",
	description:
		"Help and support features are coming soon. We're working on comprehensive guides and assistance.",
};

function HelpContent() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
			<div className="text-center space-y-6">
				<h1 className="h2 font-druk text-[#6748F8]">COMING SOON</h1>
				<h2 className="h4 font-druk text-black">HELP & SUPPORT</h2>
				<p className="p font-gta text-gray-600 max-w-md">
					We are building comprehensive help resources and support tools for
					you. Stay tuned!
				</p>
				<Link
					href="/"
					className="inline-block bg-[#6748F8] text-white px-8 py-3 rounded-lg font-gta font-medium hover:bg-[#5639e6] transition-colors"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
}

export default function Help() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<HelpContent />
		</Suspense>
	);
}
