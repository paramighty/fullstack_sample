"use client";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";

import MapRendering from "./mapRendering";

import Image from "next/image";

export default function CountryContinent() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry; // Destructures selected country from state.

	if (!country?.name?.common) {
		return null;
	}
	// Retrieves and prepares various pieces of country data for display.
	const languageNames = Object.values(country?.languages || {});
	const regionDetails = country?.subregion || "mystry";
	const demonyms = country?.demonyms?.eng?.f || "your friend";
	const hasWaterbody = country?.landlocked ? "do not have" : "has";
	const relativeToWater = country?.landlocked ? "unlike" : "like";
	const driveSide = country?.car?.side
		? `they drive on the ${country?.car.side} side of
	the road`
		: "they don't have much roads there";
	const borderingCountries =
		country?.borders?.length > 1
			? `${country.borders.length} neighbours`
			: country?.borders?.length === 1
			? `${country.borders.length} neighbour`
			: "no neighbour";
	const languageText = languageNames.length
		? `${demonyms}s predominantly speak ${languageNames[0]} here and so remember to learn "Hello" and "Thank you" in ${languageNames[0]}`
		: `There is no specific language that ${demonyms} speak here.`;

	if (country.subregion === "Africa") {
		console.log("it is a great match");
	}

	console.log(`${country?.region}`);

	return (
		<div className="relative bg-[#DBCCFC] min-h-fit flex justify-center content-center">
			<div className="md:px-0 h-full m-0 md:m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen content-center flex-col md:flex-row justify-center py-2 md:p-4">
					<MapRendering />

					<div className="grid grid-cols-6 w-full">
						<h2 className="h4 leading-none font-druk gap-4 col-start-2 col-span-4 text-center place-content-end">
							{country?.name?.common}, a country in {regionDetails}
						</h2>
						<p className="p font-gta col-start-2 col-span-4 text-center">
							It shares border with {borderingCountries}. The country{" "}
							{hasWaterbody} its waterbody {relativeToWater} most other
							countries. And, important - {driveSide}. If in doubt, better to
							hire a chauffer.
							<br></br>
							{languageText}.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
