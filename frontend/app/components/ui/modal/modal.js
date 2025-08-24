"use client";

import { useState, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useFetchSuggestions } from "@/app/hooks/useFetchSuggestions";
import Link from "next/link";
import Buttons from "@/app/components/ui/buttons/buttons";
import crossIcon from "/public/icons/crossIcon.webp";
import Image from "next/image";

function ModalContent() {
	const [query, setQuery] = useState("");
	const [isInputFocused, setIsInputFocused] = useState(false);
	const { suggestions, error } = useFetchSuggestions(query);

	const [selectedCountry, setSelectedCountry] = useState("");

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const modal = searchParams.get("search");

	const handleSubmit = () => {
		if (selectedCountry.trim()) {
			router.push(`/country/${encodeURIComponent(selectedCountry)}`);
		}
	};
	const handleChange = (event) => {
		setQuery(event.target.value);

		if (event.target.value !== selectedCountry) {
			setSelectedCountry("");
		}
	};

	// Don't render if modal parameter is not present
	if (!modal) return null;

	return (
		<section className="fixed left-0 top-0 w-screen h-screen bg-[#DBCCFC] z-50 overflow-hidden backdrop-blur flex flex-col justify-start items-center px-2 pt-32">
			<div className="flex flex-col">
				{/* Button to close modal */}
				<Link href={pathname} className="self-end">
					<Buttons icon={true} src={crossIcon} />
				</Link>
				<h2 className="h2 font-druk text-center">
					SEARCH FOR YOUR DESTINATION
				</h2>

				<div
					className={`bg-white p-5 rounded-lg w-full max-w-2xl overflow-hidden transition-all duration-300 ${
						isInputFocused && (suggestions.length > 0 || query.length > 0)
							? "h-60 sm:h-96"
							: "h-auto"
					}`}
				>
					<div className="flex flex-col relative">
						<div className="flex flex-col px-2 gap-4">
							<p className="small font-bold tracking-tight font-gta pl-3">
								Click and select your destination from the suggestions
							</p>

							{/* Input with button container */}
							<div className="relative flex pb-2 gap-1">
								<input
									type="search"
									placeholder="Start typing here for suggestions"
									onChange={handleChange}
									onFocus={() => setIsInputFocused(true)}
									onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
									value={query}
									className="small text-slate-800 rounded-lg border border-slate-400 focus:border-[#794DFF] w-full p-3"
								/>
								{/* Searchicon button  */}

								<button
									onClick={handleSubmit}
									className="bg-black text-white rounded-full p-3 focus:ring-blue-300 hover:bg-black-800 focus:ring-4 focus:outline-none transition-colors flex-shrink-0"
									aria-label="Search"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</button>
							</div>

							{/* Suggestions dropdown */}
							{isInputFocused &&
								(suggestions.length > 0 || query.length > 0) && (
									<div className="text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-32 sm:max-h-48 overflow-y-auto">
										{suggestions.length > 0
											? suggestions.map((country) => (
													<div
														key={country.name.common}
														className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
														onClick={() => {
															setSelectedCountry(country.name.common);
															setQuery(country.name.common);
														}}
													>
														{country.flags?.png && (
															<Image
																src={country.flags.png}
																alt="flag"
																className="inline w-6 h-4 mr-2"
																height={10}
																width={12}
															/>
														)}
														{country.name.common}
													</div>
											  ))
											: query.length > 0 &&
											  !error && (
													<div className="p-3 text-slate-500 text-center">
														No countries found matching &quot;{query}&quot;.
														<br /> Select a country from the list.
													</div>
											  )}
									</div>
								)}

							{/* Error message */}
							{error && (
								<p className="text-red-500 small font-bold tracking-tight font-gta pl-3">
									{error}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Modal() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ModalContent />
		</Suspense>
	);
}
