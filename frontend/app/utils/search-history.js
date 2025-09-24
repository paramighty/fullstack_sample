async function getSearchHistory({ signal }) {
	const response = await fetch("/api/search-history", {
		credentials: "include",
		signal: signal,
	});

	if (!response.ok) {
		console.log(response.status);
		return;
	}

	const data = await response.json();

	return data;
}
async function insertToSearchHistory(countryName) {
	// implementation
	const response = await fetch("/api/search-history", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify({ countryName: countryName }),
	});
}

export { getSearchHistory, insertToSearchHistory };
