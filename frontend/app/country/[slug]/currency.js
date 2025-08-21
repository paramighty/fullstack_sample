"use client";

import { useContext } from "react";
import { MyContext } from "../../context/context";

// Currency: Displays information about the currency used in a selected country.
export default function Currency() {
	const { myState } = useContext(MyContext); // Access shared context for application-wide state.
	const country = myState?.selectedCountry; // Retrieve the selected country's data from the context.

	// Checks if country data is present. If not, exit the component early to avoid errors.
	if (!country?.name?.common) {
		return <></>;
	}

	// Retrieves currency information from the country object.
	const currencyNames = Object.values(country?.currencies || {});
	// Check if currency information exists to handle rendering accordingly.
	const currencyObj = Object.keys(currencyNames).length;

	return (
		<div className="relative bg-black min-h-fit">
			<div className="p-4 md:px-0 h-full m-auto w-screen max-w-[1680px]">
				<div className="flex min-h-screen flex-col justify-center items-center">
					<h4 className="h4 font-druk text-white text-center">MONEY MATTERS</h4>

					{/* Conditionally renders content based on the presence of currency data. */}
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
