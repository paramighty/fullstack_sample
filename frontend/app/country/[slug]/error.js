"use client"; // Error components must be Client Components

import { useEffect } from "react";

import Buttons from "@/app/components/buttons/buttons";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col justify-center text-center">
			<h1 className="p">
				Ohho! There seems to be something wrong with our partner website! Try
				again a few minutes later or search for a different country.
			</h1>
			<Buttons
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Reload the page
			</Buttons>
		</div>
	);
}
