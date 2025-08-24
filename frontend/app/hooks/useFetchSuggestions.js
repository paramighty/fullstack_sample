import { useState, useEffect } from "react";

export function useFetchSuggestions(query) {
	const [suggestions, setSuggestions] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchSuggestions() {
			if (!query?.trim()) return;
			try {
				const response = await fetch(
					`${
						process.env.NEXT_PUBLIC_API_URL
					}/api/suggestions?query=${encodeURIComponent(query)}`,
					{ signal: controller.signal }
				);
				const data = await response.json();
				setSuggestions(data);
				setError(null);
			} catch (err) {
				setError("Failed to load suggestions");
				setSuggestions([]);
			}
		}

		fetchSuggestions(); // Call the async function
		return () => {
			controller.abort();
		};
	}, [query]);

	return { suggestions, error };
}
