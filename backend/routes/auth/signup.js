const express = require("express");
const { supabase } = require("../../db/supabase");
const router = express.Router();

router.post("/", async (req, res) => {
	// Step 1: Extract data
	const { fullName, email, password, confirmPassword, phone, country } =
		req.body;

	// Step 2: 4 validations here

	const emailRegex =
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	//minimum requirement
	if (!email || !password || !confirmPassword) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	if (!emailRegex.test(email)) {
		return res.status(400).json({ error: "email format is incorrect" });
	}
	//password=confirmpasword
	if (password !== confirmPassword) {
		return res
			.status(400)
			.json({ error: "password confirmation is incorrect" });
	}

	//password strength check

	if (!passwordRegex.test(password)) {
		return res.status(400).json({
			error:
				"Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character",
		});
	}
	// Step 3: Call Supabase

	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
		options: {
			data: {
				fullName: fullName,
				phone: phone,
				country: country,
			},
		},
	});

	// Step 4: Handle response

	if (error) {
		return res.status(400).json({ error: error.message });
	}

	return res.status(200).json({
		success: "Signup successful. Check your email for verification link",
	});
});

module.exports = router;
