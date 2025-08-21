import Link from "next/link";
import Buttons from "@/app/components/buttons/buttons";

// NotFound: A simple 404 error page component that provides a user-friendly message and a link to return to the homepage.
export default function NotFound() {
	return (
		// Main container for the NotFound component, centered within the screen.
		<div className="flex h-fit max-h-screen flex-col justify-center content-center items-center">
			{/* Heading to indicate the error state to the user. */}
			<h2 className="h2 self-center">Not Found</h2>
			{/* More detailed explanation of the error. */}
			<p>Could not find requested resource</p>
			{/* Link to navigate back to the homepage, improving user experience by providing an easy escape from the error page. */}
			<Link href="/">
				<Buttons>Return Home</Buttons> // Button styled link for better user
				interaction.
			</Link>
		</div>
	);
}
