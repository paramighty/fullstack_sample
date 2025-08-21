import Link from "next/link";
import Buttons from "./components/buttons/buttons";

export default function NotFound() {
	return (
		<div className="flex h-fit max-h-screen flex-col justify-center content-center items-center">
			<h2 className="h2 self-center">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">
				<Buttons>Return Home</Buttons>
			</Link>
		</div>
	);
}
