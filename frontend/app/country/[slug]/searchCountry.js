"use client";

import CountryIntro from "./countryIntro";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context/context";
import CountryContinent from "./countryContinent";
import Subscription from "./subscription";
import Currency from "./currency";

export default function SearchCountry({ params, initialCountry }) {
	const { myState, setMyState } = useContext(MyContext);
	const [country, setCountry] = useState(initialCountry);

	useEffect(() => {
		const handleCountryView = async () => {
			if (!params?.slug) return;

			const name = myState?.selectedCountry?.name?.common;

			if (name) {
				// Have data, just track
				fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${params.slug}`
				);
			} else {
				// Need data, fetch and track
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${params.slug}`
				);

				if (!response.ok) {
					console.error("Failed to fetch country");
					return;
				}

				const data = await response.json();
				if (data && data[0]) {
					setMyState({ selectedCountry: data[0] });
				}
			}
		};
		handleCountryView();
	}, [params.slug, myState?.selectedCountry?.name?.common, setMyState]);

	return (
		<div>
			{/* {myState?.selectedCountry?.name?.common} */}
			{/* My Post: {params.slug} */}
			<CountryIntro />
			<CountryContinent />
			<Currency />
			<Subscription />
		</div>
	);
}
