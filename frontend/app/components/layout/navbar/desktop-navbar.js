import Link from "next/link";

import Buttons from "../../ui/buttons/buttons";

export default function DesktopNavbar() {
	return (
		<>
			{/* Section element as the container for the navigation bar */}
			<section
				id="minorityNav"
				className="w-full hidden md:block md:fixed top-0 h-fit bg-white z-50 shadow-sm"
			>
				<div className="flex justify-between items-center m-auto w-full max-w-[1440px] py-2 px-4 md:px-6 lg:px-14">
					{/* Logo container, linking back to the homepage */}
					<div className="">
						<Link href="/">
							{" "}
							<svg
								width="200"
								height="24"
								viewBox="0 0 2387 287"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title id="minority-logo">Minority</title>
								<path d="M534.225 9H456V276.44H534.225V9Z" fill="black" />
								<path d="M1692.22 10H1614V277.44H1692.22V10Z" fill="black" />
								<path
									d="M2295.28 9.40228L2216.23 121.905L2137.19 9.40228H2045.97L2177.12 189.431V276.842H2255.35V189.431L2386.5 9.40228H2295.28Z"
									fill="black"
								/>
								<path
									d="M1737.96 9.40228V73.4717H1846.71V276.842H1924.93V73.4717H2033.67V9.40228H1737.96Z"
									fill="black"
								/>
								<path
									d="M1503.39 187.503C1539.55 175.097 1563.05 141.306 1563.05 100.014C1563.05 48.359 1524.26 10 1465.2 10H1276.02L1276 277.44L1352.29 277.44V192.815H1420.51L1482.16 277.44H1568.91L1503.39 187.503ZM1461.32 131.545H1352.29V74.071H1461.32C1476.73 74.0863 1489.21 86.9479 1489.21 102.808C1489.21 118.669 1476.73 131.53 1461.32 131.545Z"
									fill="black"
								/>
								<path
									d="M284.415 9.40228L202.076 178.907L119.74 9.40228H0V276.842H75.2971V91.9647L169.802 276.842H234.353L328.858 91.9647V276.842H404.173V9.40228H284.415Z"
									fill="black"
								/>
								<path
									d="M769 10L785.5 277.44H814L682.74 10H563V277.44H638.297V92.5625L685.55 185.001L732.802 277.44H814L851.427 143.72L769 10L785.5 277.44H814H891.858H851.427V143.72V10H769Z"
									fill="black"
								/>
								<path
									d="M1053.17 0C947.423 0 879 61.73 879 143.12C879 224.519 947.424 286.243 1053.17 286.243C1158.55 286.243 1227.34 224.519 1227.34 143.12C1227.34 61.73 1158.55 0 1053.17 0ZM1053.15 220.919C1000.98 220.919 959.401 193.865 959.401 143.12C959.401 92.3754 1000.98 65.3389 1053.15 65.3389C1105 65.3389 1146.6 92.3754 1146.6 143.12C1146.6 193.865 1105 220.919 1053.15 220.919Z"
									fill="black"
								/>
							</svg>
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
