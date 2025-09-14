"use client";
import { useState } from "react";

export default function SignUp() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");
		try {
			const req = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!req.ok) {
				const errorData = await req.json();
				setMessage(errorData.message || "Account creation failed");
				return;
			}

			const res = await req.json();
			setMessage(res.message || "Account created successfully!");
		} catch (error) {
			setMessage(
				"Your account could not be created due to network issues. Try Again!"
			);
			console.log("Error:", error);
		}
	};

	// const inputClass =
	// 	"w-full p-3 border border-[#B5B5B5] rounded-lg font-gta focus:ring-1 focus:ring-[#7048E8] focus:border-[#7048E8] outline-none transition-colors";

	return (
		<section className="flex justify-center items-center min-h-[80vh] px-4">
			<form onSubmit={handleSubmit}>
				<div className="w-full max-w-md">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="h2 font-druk text-[#1F1E1D] mb-2">SIGN UP</h1>
						<p className="p font-gta text-[#666]">Create a new account</p>
					</div>

					<div className="space-y-6">
						{/* Full Name */}
						<div>
							<label
								htmlFor="fullName"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Full Name
							</label>
							<input
								name="fullName"
								type="text"
								id="fullName"
								placeholder="Enter your full name"
								onChange={handleChange}
								value={formData.fullName}
								required
							/>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Email Address
							</label>
							<input
								name="email"
								type="email"
								id="email"
								placeholder="name@example.com"
								onChange={handleChange}
								value={formData.email}
								required
							/>
						</div>

						{/* Password */}
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Password
							</label>
							<input
								name="password"
								type="password"
								id="password"
								placeholder="Create a strong password"
								onChange={handleChange}
								value={formData.password}
								required
							/>
						</div>

						{/* Confirm Password */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Confirm Password
							</label>
							<input
								name="confirmPassword"
								type="password"
								id="confirmPassword"
								placeholder="Repeat your password"
								onChange={handleChange}
								value={formData.confirmPassword}
								required
							/>
						</div>

						{/* Country */}
						{/* <div>
							<label
								htmlFor="countries"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Select your country
							</label>
							<select name="country" id="countries" required>
								<option value="">-- Select --</option>
							</select>
						</div> */}
						{/* Phone Number */}
						{/* <div>
							<label
								htmlFor="phone"
								className="block mb-2 text-sm font-medium font-gta text-[#1F1E1D]"
							>
								Phone Number
							</label>
							<input
								name="phone"
								type="tel"
								id="phone"
								placeholder="Enter your phone number"
								required
							/>
						</div> */}

						{/* Terms */}
						<div className="flex items-start">
							<input
								name="terms"
								id="terms"
								type="checkbox"
								className="w-4 h-4 border border-[#B5B5B5] rounded focus:ring-2 focus:ring-[#1F1E1D]"
								required
							/>
							<label
								htmlFor="terms"
								className="ml-2 text-sm font-gta text-[#1F1E1D]"
							>
								I agree with the{" "}
								<a
									href="#"
									className="text-[#1F1E1D] hover:underline font-medium"
								>
									terms and conditions
								</a>
							</label>
						</div>

						{/* Submit */}
						<button type="submit" className="btn-CTA h-12 w-full">
							CREATE ACCOUNT
						</button>
					</div>

					{message && (
						<p className="text-[#e84848] hover:underline font-medium">
							{message}
						</p>
					)}

					{/* Footer */}
					<div className="text-center mt-6">
						<p className="text-sm font-gta text-[#666]">
							Already have an account?{" "}
							<a
								href="/login"
								className="text-[#7048E8] hover:underline font-medium"
							>
								Log in
							</a>
						</p>
					</div>
				</div>
			</form>
		</section>
	);
}
