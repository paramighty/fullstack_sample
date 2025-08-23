const express = require("express");
const router = express.Router();

let countryCached = null;

// Function to fetch and cache country data
async function fetchCountryData() {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/all?fields=name,flags`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch country data");
		}
		countryCached = await response.json();
	} catch (error) {
		console.error("Error fetching country data:", error);
		throw error;
	}
}

// Suggestions endpoint
router.get("/", async (req, res) => {
	const query = req.query.query;

	// Validate query parameter
	if (!query || typeof query !== "string" || !query.trim()) {
		return res
			.status(400)
			.json({ error: "Invalid or missing query parameter" });
	}

	try {
		// Load country data if not cached
		if (!countryCached) {
			await fetchCountryData();
		}

		const suggestions = [];

		for (const country of countryCached) {
			if (!country) continue;
			const match = country?.name?.common
				.toLowerCase()
				.includes(query.toLowerCase());
			if (match) {
				suggestions.push(country);
				if (suggestions.length === 5) break;
			}
		}

		res.json(suggestions);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch suggestions" });
	}
});

module.exports = router;
