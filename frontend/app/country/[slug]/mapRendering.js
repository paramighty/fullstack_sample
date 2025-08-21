import { useContext } from "react";
import { MyContext } from "../../context/context";
import Image from "next/image";
import mapAfrica from "/public/images/maps/Map-of-Continent-Africa.webp";
import mapNorthAmerica from "/public/images/maps/Map-of-North-America.webp";
import mapAsia from "/public/images/maps/Map-of-Asia.webp";
import mapOceania from "/public/images/maps/Map-of-Australia.webp";
import mapEurope from "/public/images/maps/Map-of-Europe.webp";
import mapAntarctica from "/public/images/maps/Map-of-Antarctica.webp";
import mapSouthAmerica from "/public/images/maps/Map-of-South-America.webp"; // Correct this path if it's incorrect

// MapRendering: Component that renders a map image based on the region of the selected country.
export default function MapRendering() {
	const { myState } = useContext(MyContext); // Access shared context for application-wide state.
	const country = myState?.selectedCountry; // Retrieve the selected country's data from the context.

	if (!country?.name?.common) {
		return null; // Exits the component if no country is selected.
	}

	const region = country?.region; // Extracts the region from the country data.
	console.log(`${region}`);

	return (
		// Conditionally renders map images based on the region
		<div className="grid md:max-w-[50%] md:min-w-[50%] grid-cols-1 md:grid-cols-6">
			{region === "Africa" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapAfrica}
					alt="map of the continent"
				/>
			) : region === "Europe" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapEurope}
					alt="map of the continent"
				/>
			) : region === "Asia" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapAsia}
					alt="map of the continent"
				/>
			) : region === "America" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapNorthAmerica}
					alt="map of the continent"
				/>
			) : region === "Americas" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapSouthAmerica}
					alt="map of the continent"
				/>
			) : region === "Oceania" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapOceania}
					alt="map of the continent"
				/>
			) : region === "Antarctic" ? (
				<Image
					className="md:col-start-2 md:col-span-4 self-center justify-self-center rounded-lg shadow-2xl"
					src={mapAntarctica}
					alt="map of the continent"
				/>
			) : null}
		</div>
	);
}
