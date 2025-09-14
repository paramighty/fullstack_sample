const express = require("express");
const { supabase } = require("../../db/supabase");
const router = express.Router();

router.post("/", async (req, res) => {
	res.clearCookie("access_token", {
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
		maxAge: 3600000,
		path: "/",
	});
	res.clearCookie("refresh_token", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
		path: "/",
	});

	const { error } = await supabase.auth.signOut();
	if (error) {
		console.log("Supabase Signout error:", error);
	}
	return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
