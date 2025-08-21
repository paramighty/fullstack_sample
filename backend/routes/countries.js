import express from "express";
import { supabase } from "../db/supabase.js";

const router = express.Router();

router.get("/:name", async (req, res) => {
	const country_name = req.params.name;
	const isJustSearching = req.query.search === "true";

	try {
		const fetchData = await fetch(
			`https://restcountries.com/v3.1/name/${country_name}`,
			{
				headers: { "User-Agent": "Node.js" },
			}
		);

		if (!fetchData.ok) {
			return res.status(fetchData.status).json({ error: "Country not found" });
		}

		const result = await fetchData.json();

		//supabase data entry
		if (!isJustSearching) {
			const { data, error } = await supabase
				.from("search_data")
				.insert([{ country_name: country_name }])
				.select();

			console.log("Search saved in supabase", { data, error });
		}

		res.json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
