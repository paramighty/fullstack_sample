import Link from "next/link";
import Buttons from "@/app/components/ui/buttons/buttons";

// NotFound: A simple 404 error page component that provides a user-friendly message and a link to return to the homepage.
export default function NotFound() {
	return (
		<div className="flex h-fit max-h-screen flex-col justify-center content-center items-center">
			<h2 className="h2 self-center">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">
				<Buttons>
					Return Home {/* Button styled link for better user interaction. */}
				</Buttons>
			</Link>
		</div>
	);
}
