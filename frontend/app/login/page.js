"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "../context/context";

export default function Login() {
	const { isLoggedIn, setIsLoggedIn, userData, setUserData } =
		useContext(MyContext);
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
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
			console.log(
				"Login URL:",
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`
			);

			const request = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
					credentials: "include",
				}
			);

			if (!request.ok) {
				const response = await request.json();
				setMessage(
					`${response.error}` ||
						"You cannot be logged in at the moment. Try again!"
				);
				return;
			}

			const response = await request.json();
			setMessage(response.message);
			setIsLoggedIn(true);
			setUserData(response.user);
			router.push("/");
			router.refresh();
		} catch (error) {
			setMessage("There seems to be some network issues. Try to login again!");
			console.log("Error:", error);
		}
	};

	return (
		<section className="flex justify-center items-center min-h-[80vh] px-4">
			<form onSubmit={handleSubmit}>
				<div className="w-full max-w-md">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="h2 font-druk text-[#1F1E1D] mb-2">Login</h1>
					</div>

					<div className="space-y-6">
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
								placeholder="put your password here"
								onChange={handleChange}
								value={formData.password}
								required
							/>
						</div>
						{/* Submit */}
						<button type="submit" className="btn-CTA h-12 w-full">
							Log in
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
							Do not have an account?{" "}
							<a
								href="/signup"
								className="text-[#7048E8] hover:underline font-medium"
							>
								Signup!
							</a>
						</p>
					</div>
				</div>
			</form>
		</section>
	);
}
