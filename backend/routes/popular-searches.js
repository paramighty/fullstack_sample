const express = require("express");
const router = express.Router();
const { supabase } = require("../db/supabase.js");

router.get("/", async (req, res) => {
	const { data, error } = await supabase.rpc("global_popular_search");
	if (error) {
		return res.status(500).json({ error: error.message });
	}
	res.json(data);
});

module.exports = router;
