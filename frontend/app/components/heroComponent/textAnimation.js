"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function TextAnimation() {
	// TextAnimation component that cycles through a list of words with an animation
	const words = [
		["MOROCCO?"],
		["BANLADESH?"],
		["USA?"],
		["HONGKONG?"],
		["SWEDEN?"],
		["SAMOA?"],
		["END OF WORLD?"],
	];

	// State to track the current index of the word array
	const [index, setIndex] = useState(0);

	// Effect to cycle through words every 3000 milliseconds (3 seconds)
	useEffect(() => {
		const interval = setInterval(() => {
			// Update index state to the next word, wrapping around to the start using module
			setIndex((pv) => (pv + 1) % words.length);
		}, 3000);

		// Cleanup function to clear interval on component unmount
		return () => clearInterval(interval);
	}, []); // Empty dependency array ensures the effect runs only once after initial render

	return (
		<div className="flex justify-center content-center m-0 whitespace-nowrap">
			<AnimatePresence mode="wait">
				<motion.h1
					key={words[index]}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.4,
						ease: "linear",
						delay: 0.01,
					}}
					exit={{
						opacity: 0,
						y: -50,
					}}
					className="font-druk text-[5rem] md:text-[6rem] lg:text-[7.5rem] text-black"
				>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
}
