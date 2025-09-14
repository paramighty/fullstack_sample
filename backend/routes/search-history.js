const express = require("express");
const router = express.Router();
const { supabase } = require("../db/supabase.js");

router.get("/", async (req, res) => {
	const access_token = req.cookies.access_token;

	if (!access_token) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser(access_token);

	if (error) {
		return res.status(401).json({ error: "Invalid token" });
	}

	const { data: dbData, error: dbError } = await supabase
		.from("search_history")
		.select("country_searched")
		.eq("user_id", user.id)
		.order("created_at", { ascending: false })
		.limit(5);

	if (dbError) {
		return res.status(401).json({ error: "No data available" });
	}
	return res.status(200).json(dbData);
});

router.post("/", async (req, res) => {
	const { countryName } = req.body;

	const access_token = req.cookies.access_token;

	if (!access_token) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	const {
		data: { user },
		error: tokenError,
	} = await supabase.auth.getUser(access_token);

	if (tokenError) {
		return res.status(401).json({ tokenError: "Invalid token" });
	}

	const { error } = await supabase
		.from("search_history")
		.insert({ user_id: user.id, country_searched: countryName });

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return res.status(200).json({});
});

module.exports = router;
