import { motion, MotionConfig } from "framer-motion";

export default function AnimatedHamburger({ active, toggle }) {
	return (
		<MotionConfig
			transition={{
				duration: "0.5",
				ease: "easeInOut",
			}}
		>
			<motion.button
				alt="hamburger menu icon. Onclick opens the menu for mobile"
				initial={false}
				onClick={toggle}
				className="relative h-10 w-10 transition-colors"
				animate={active ? "open" : "closed"}
			>
				<motion.span
					style={{
						left: "50%",
						top: "35%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-[2px] w-6 bg-black rounded-full"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							top: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							top: ["50%", "50%", "35%"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "50%",
						top: "50%",
						x: "-50%",
						y: "-50%",
					}}
					className="absolute h-[2px] w-6 bg-black rounded-full"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "-45deg"],
						},
						closed: {
							rotate: ["-45deg", "0deg", "0deg"],
						},
					}}
				/>
				<motion.span
					style={{
						left: "calc(50% + 10px)",
						bottom: "35%",
						x: "-85%",
						y: "50%",
					}}
					className="absolute h-[2px] w-3 bg-black rounded-full"
					variants={{
						open: {
							rotate: ["0deg", "0deg", "45deg"],
							left: "60%",
							bottom: ["35%", "50%", "50%"],
						},
						closed: {
							rotate: ["45deg", "0deg", "0deg"],
							left: "calc(50% + 10px)",
						},
					}}
				/>
			</motion.button>
		</MotionConfig>
	);
}
