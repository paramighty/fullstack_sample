import { useState, useEffect } from "react";

export function useFetchCountry(countryName) {
	const [countryData, setCountryData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		async function fetchCountry() {
			try {
				setLoading(true);
				const response = await fetch(
					`${
						process.env.NEXT_PUBLIC_API_URL
					}/api/countries/${encodeURIComponent(countryName)}`,
					{ signal: controller.signal }
				);

				if (!response.ok) {
					throw new Error("Country not found");
				}

				const data = await response.json();
				setCountryData(data);
				setError(null);
				setLoading(false);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message);
					setCountryData(null);
				}
				setLoading(false);
			}
		}

		fetchCountry();

		return () => {
			controller.abort();
		};
	}, [countryName]);

	return { countryData, error };
}
