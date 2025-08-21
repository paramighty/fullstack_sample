import Link from "next/link";
import Image from "next/image";
import minorityLogo from "/public/images/Minority.png";

import Buttons from "../buttons/buttons";

export default function DesktopNavbar() {
	return (
		<>
			{/* Section element as the container for the navigation bar */}
			<section
				id="minorityNav"
				className="w-full hidden md:block md:fixed top-0 h-fit"
			>
				<div className="flex justify-between items-center m-auto w-full max-w-[1440px] py-2 px-4 md:px-6 lg:px-14">
					{/* Logo container, linking back to the homepage */}
					<div className="">
						<Link href="/">
							{" "}
							<Image
								className="max-w-36"
								src={minorityLogo}
								alt="this is the company logo"
							/>
						</Link>
					</div>
					{/* Navigation menu with links to different pages */}
					<nav className="h-fit w-max pl-2.5 pr-2.5 py-2 bg-white flex flex-row items-center justify-between rounded-full">
						<div className="flex flex-row items-center gap-x-10">
							<ul className="flex gap-x-10">
								{[
									["Banking", "/banking"],
									["Services", "/services"],
									["Help", "/help"],
								].map(([title, url]) => (
									<Link
										key={url}
										href={url}
										className="rounded-lg items-center px-3 py-2 text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900"
									>
										<li>{title}</li>
									</Link>
								))}
							</ul>
							<Buttons
								ctaBtn={true}
								className="btn-primary h-[40px] whitespace-nowrap"
							>
								Sign up
							</Buttons>
						</div>
					</nav>
				</div>
			</section>
		</>
	);
}
