import Link from "next/link";
import Buttons from "@/app/components/buttons/buttons";

import Image from "next/image";
import minorityLogo from "/public/images/Minority.webp";
import AnimatedHamburger from "./animatedhamburger";
import { useState, useEffect } from "react";

export default function MobileNavbar() {
	// State 'active' determines if the mobile menu is open (true) or closed (false).

	const [active, setActive] = useState(false);

	// useEffect manages body scroll by toggling overflow based on the 'active' state.
	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {};
	}, [active]);
	// toggle: Function to open/close the mobile menu.
	const toggle = () => {
		setActive((pv) => !pv);
	};
	return (
		<>
			<section
				id="minorityMobileNav"
				className="fixed top-0 w-full z-100 bg-white md:hidden flex flex-row items-center justify-between p-3"
			>
				<div className="flex flex-row w-full justify-between items-center">
					{/* Logo linking to home */}
					<div className="relative">
						<Link href="/">
							{" "}
							<Image
								className="max-w-28"
								src={minorityLogo}
								alt="this is the company logo"
							/>
						</Link>
					</div>
					{/* Hamburger icon that toggles menu visibility */}
					<AnimatedHamburger active={active} toggle={toggle} />
				</div>
			</section>
			<section className="fixed top-0 min-w-[80%] z-75 bg-white md:hidden flex flex-row items-center overflow-hidden justify-between p-3">
				{/* Conditional rendering of the navigation menu based on 'active' state */}
				{active === true && (
					<div className="w-full sticky h-full flex left-0 items-center justify-between p-3 overflow-y-hidden">
						<nav className="h-screen w-fit flex justify-between pt-12 pb-32">
							<div className="flex items-start pt-10">
								{/* Navigation menu with links */}
								<ul className="flex flex-col gap-y-10">
									{[
										["BANKING", "/banking"],
										["SERVICE", "/services"],
										["HELP", "/help"],
									].map(([title, url]) => (
										<Link
											href={url}
											className="rounded-lg items-center px-3 py-2 text-slate-700 font-gta hover:bg-slate-100 hover:text-slate-900"
										>
											<li key={url}>{title}</li>
										</Link>
									))}
								</ul>
							</div>
						</nav>
					</div>
				)}
			</section>
		</>
	);
}
