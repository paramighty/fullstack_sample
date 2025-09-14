async function getSearchHistory() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/search-history`,
		{ credentials: "include" }
	);

	if (!response.ok) {
		console.log(response.status);
		return;
	}

	const data = await response.json();

	return data;
}
async function insertToSearchHistory(countryName) {
	// implementation
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/search-history`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ countryName: countryName }),
			credentials: "include",
		}
	);
}

export { getSearchHistory, insertToSearchHistory };
