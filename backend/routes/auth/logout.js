const express = require("express");
const { supabase } = require("../../db/supabase");
const router = express.Router();

router.post("/", async (req, res) => {
	res.clearCookie("access_token", {
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		sameSite: "lax",
		maxAge: 3600_000,
		path: "/",
	});
	res.clearCookie("refresh_token", {
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		maxAge: 60 * 60 * 24 * 30 * 1000,
	});

	const { error } = await supabase.auth.signOut();
	if (error) {
		console.log("Supabase Signout error:", error);
	}
	return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
