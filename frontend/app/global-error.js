"use client";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function GlobalError({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);
	return (
		<html>
			<body className="min-h-screen">
				<Navbar />
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>RELOAD THE PAGE</button>
				<Footer />
			</body>
		</html>
	);
}
