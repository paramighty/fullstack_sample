const express = require("express");
const { supabase } = require("../../db/supabase.js");
const router = express.Router();

router.post("/", async (req, res) => {
	// extract data
	const { email, password } = req.body;

	//right field
	const emailRegex =
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!email || !password) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	if (!emailRegex.test(email)) {
		return res.status(400).json({ error: "email format is incorrect" });
	}

	// send to supabase

	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});

	// handle response from supabase
	if (error) {
		return res.status(401).json({ error: error.message });
	}

	// Save JWT in httpOnly cookie
	const access_token = data.session.access_token;
	const refresh_token = data.session.refresh_token;

	res.cookie("access_token", access_token, {
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
		maxAge: 3600000,
	});

	res.cookie("refresh_token", refresh_token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
	});

	return res.status(200).json({ user: data.user, message: "Login successful" });
});
module.exports = router;
