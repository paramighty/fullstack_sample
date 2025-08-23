import { useState, useEffect } from "react";

export function useFetchCountry(countryName) {
	const [countryData, setCountryData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchCountry() {
			try {
				const response = await fetch(
					`${
						process.env.NEXT_PUBLIC_API_URL
					}/api/countries/${encodeURIComponent(countryName)}`
				);

				if (!response.ok) {
					throw new Error("Country not found");
				}

				const data = await response.json();
				setCountryData(data);
				setError(null);
			} catch (err) {
				setError(err.message);
				setCountryData(null);
			}
		}

		fetchCountry();
	}, [countryName]);

	return { countryData, error };
}
