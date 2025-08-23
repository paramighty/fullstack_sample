"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function TextAnimation() {
	const words = [
		["MOROCCO?"],
		["BANLADESH?"],
		["USA?"],
		["HONGKONG?"],
		["SWEDEN?"],
		["SAMOA?"],
		["END OF WORLD?"],
	];

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((pv) => (pv + 1) % words.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [words.length]);

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
