"use client";

import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context";
import Image from "next/image";

export default function CountryIntro() {
	const { myState, setMyState } = useContext(MyContext);
	const country = myState?.selectedCountry;
	console.log(country);

	if (!country?.name?.common) {
		return <></>;
	}
	return (
		<div className="relative bg-[#f78da7] bg-opacity-20 min-h-fit">
			<div className="p-4 md:p-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen gap-4 flex-col-reverse md:flex-row justify-center items-center">
					<div className="md:max-w-[50%] md:min-w-[50%] flex flex-col items-center gap-4">
						<div className="flex flex-col justify-center content-center">
							{" "}
							<h1 className="h1 font-druk hero-title leading-none uppercase text-center sm:text-right text-[#043B10]">
								{country?.name?.common}
							</h1>
							<p className="p font-gta font-bold text-center sm:text-right">
								Capital: {country?.capital?.[0]}
							</p>
						</div>
					</div>

					<div className="md:w-[50%] h-[50%] md:h-screen bg-[#cf2e2e] bg-opacity-0 md:bg-opacity-10 flex flex-col justify-center content-center">
						<Image
							className="place-self-center rounded-lg shadow-xl"
							width={300}
							height={300}
							src={country?.flags?.png}
							alt="The image of the flag of the country searched"
							priority
						/>
						<p className="small text-center">
							<em>The flag of {country?.name?.common} </em>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
