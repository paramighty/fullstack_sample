"use client";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";

import MapRendering from "./mapRendering";

import Image from "next/image";

// Defines a component to display information about a selected country within its continent context.
export default function CountryContinent() {
	const { myState, setMyState } = useContext(MyContext); // Accesses shared state from MyContext.
	const country = myState?.selectedCountry; // Destructures selected country from state.
	// Handles case where no country is selected (e.g., on initial load or if data is missing).
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
		? `${demonyms} speak ${languageNames[0]} here and so remember to learn a word or two in ${languageNames[0]}`
		: `There is no specific language that ${demonyms} speak here.`;

	if (country.subregion === "Africa") {
		console.log("it is a great match");
	}

	console.log(`${country?.region}`);

	return (
		<div className="relative bg-[#DBCCFC] min-h-fit flex justify-center content-center">
			<div className="md:px-0 h-full m-0 md:m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen content-center flex-col md:flex-row justify-center py-2 md:p-4">
					{/* Renders a map visualization of the country's location. */}
					<MapRendering />

					<div className="grid grid-cols-6 w-full">
						<h4 className="h4 leading-none font-druk gap-4 col-start-2 col-span-4 text-center place-content-end">
							{country?.name?.common}, a country in {regionDetails}
						</h4>
						<p className="p font-gta col-start-2 col-span-4 text-center">
							It shares border with {borderingCountries}. The country{" "}
							{hasWaterbody} its waterbody {relativeToWater} most other
							countries. And, important - {driveSide}. If you are not
							comfortable, better to hire a chauffer. {languageText}.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
