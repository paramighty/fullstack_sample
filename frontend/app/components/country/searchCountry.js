"use client";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import CountryIntro from "./countryIntro.js";
import { useFetchCountry } from "@/app/hooks/useFetchCountry";
import CountryContinent from "./countryContinent";
import Subscription from "./subscription";
import Currency from "./currency";

export default function SearchCountry({ params }) {
	const { countryData, error } = useFetchCountry(params.slug);
	const { setMyState } = useContext(MyContext);

	useEffect(() => {
		if (countryData?.[0]) {
			setMyState({ selectedCountry: countryData[0] });
		}
	}, [countryData, setMyState]);

	// Handle loading and error states
	if (error) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h2>Error loading country data</h2>
				<p>{error}</p>
			</div>
		);
	}

	if (!countryData) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div>Loading country information...</div>
			</div>
		);
	}

	return (
		<div>
			<CountryIntro />
			<CountryContinent />
			<Currency />
			<Subscription />
		</div>
	);
}
