"use client";

import { useContext } from "react";
import { MyContext } from "../../context/context";
import minorityApp from "/public/images/MinorityApp.png";
import rightIcon from "/public/icons/correctIcon.webp";
import Image from "next/image";

export default function Subscription() {
	const { myState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	if (!country?.name?.common) {
		return <></>;
	}

	const items = [
		"Tips on best way to commute",
		"Recharge phone anywhere",
		"Learn local gestures",
		"Contact local authority",
		"Cancel anytime",
	];

	console.log(country);

	if (!country?.name?.common) {
		return <></>;
	}

	return (
		<div className="relative bg-white min-h-fit">
			<div className="p-4 md:px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen gap-4 flex-col-reverse md:flex-row justify-center items-center">
					<div className="md:max-w-[50%] md:min-w-[50%] flex flex-col items-center gap-4">
						<div className="flex flex-col justify-center content-center">
							{/* Displays subscription benefits in a list format */}{" "}
							<h2 className="h5 leading-none font-druk  text-center md:text-left text-[#6748F8]">
								LIFETIME SUBSCRIPTION
							</h2>
							<h5 className="h5 leading-none font-druk text-center md:text-left">
								ONLY $14.99
							</h5>
						</div>
						<div className="flex flex-col items-center md:items-start">
							<ul className="max-w-md font-gta space-y-1 text-black">
								{items.map((item) => (
									<li key={item} className="flex items-center">
										<Image src={rightIcon} alt="icon of right sign" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="grid md:max-w-[50%] md:min-w-[50%] grid-cols-1 md:grid-cols-6 bg-[#E6F0E4]">
						<Image
							className="md:col-start-2 md:col-span-4 self-center justify-self-center"
							src={minorityApp}
							alt="subscription"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
