import { useContext } from "react";
import { MyContext } from "../../context/context";
import Image from "next/image";
import mapAfrica from "/public/images/maps/Map-of-Continent-Africa.webp";
import mapNorthAmerica from "/public/images/maps/Map-of-North-America.webp";
import mapAsia from "/public/images/maps/Map-of-Asia.webp";
import mapOceania from "/public/images/maps/Map-of-Australia.webp";
import mapEurope from "/public/images/maps/Map-of-Europe.webp";
import mapAntarctica from "/public/images/maps/Map-of-Antarctica.webp";
import mapSouthAmerica from "/public/images/maps/Map-of-South-America.webp";

export default function MapRendering() {
	const { myState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	if (!country?.name?.common) {
		return null;
	}

	const region = country?.region;
	console.log(`${region}`);

	return (
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
