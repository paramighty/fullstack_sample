"use client";

import { useContext } from "react";
import { MyContext } from "../../context/context";

export default function Currency() {
	const { myState } = useContext(MyContext);
	const country = myState?.selectedCountry;

	if (!country?.name?.common) {
		return <></>;
	}

	const currencyNames = Object.values(country?.currencies || {});

	const currencyObj = Object.keys(currencyNames).length;

	return (
		<div className="relative bg-black min-h-fit">
			<div className="p-4 md:px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col justify-center items-center">
					<h2 className="h4 font-druk text-white text-center">MONEY MATTERS</h2>

					{currencyObj === 0 ? (
						<p className="p font-gta text-white text-center">
							We are not operating in this region yet.
						</p>
					) : (
						<p className="p font-gta text-white text-center">
							Their currency is called{" "}
							<em className="text-[#BEF300]">{currencyNames[0].name}</em>. Watch
							out for the symbol{" "}
							<strong className="text-[#794DFF]">
								{" "}
								{currencyNames[0].symbol}{" "}
							</strong>{" "}
							for money
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
