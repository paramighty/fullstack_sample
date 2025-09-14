const express = require("express");
const { supabase } = require("../../db/supabase");
const router = express.Router();

router.get("/", async (req, res) => {
	const access_token = req.cookies.access_token;
	const refresh_token = req.cookies.refresh_token;

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

	return res.status(200).json({ user });
});

module.exports = router;
