"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useFetchSuggestions } from "@/app/hooks/useFetchSuggestions";
import { insertToSearchHistory } from "@/app/utils/search-history";
import SuggestionsList from "./suggestions-list";
import PopularSearches from "./popular-searches";
import UserSearchHistory from "./user-search-history";
import { MyContext } from "@/app/context/context";

export default function SearchBox() {
	const { isLoggedIn } = useContext(MyContext);
	const [query, setQuery] = useState("");
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [isSearchEnabled, setIsSearchEnabled] = useState(false);

	const { suggestions, error } = useFetchSuggestions(query);
	const router = useRouter();

	const handleChange = (event) => {
		const valueTarget = event.target.value;
		setQuery(valueTarget);
		setIsSearchEnabled(false);
		if (valueTarget !== selectedCountry) setSelectedCountry("");
	};

	const handleSubmit = async () => {
		if (selectedCountry && selectedCountry.trim()) {
			if (isLoggedIn) {
				try {
					await insertToSearchHistory(selectedCountry);
				} catch (error) {
					console.error("Failed to save search history:", error);
				}
			}
			router.push(`/country/${encodeURIComponent(selectedCountry)}`);
		}
	};

	const handleSelect = (name) => {
		setSelectedCountry(name);
		setQuery(name);
		setIsSearchEnabled(true);
	};

	// const handlePopularClick = (name) => {
	// 	handleSelect(name);
	// };

	const showHistory = isLoggedIn && isInputFocused && query.length === 0;
	const showSuggestions =
		isInputFocused && query.length > 0 && suggestions.length > 0;

	return (
		<div
			className={`bg-white p-5 rounded-lg w-full max-w-2xl overflow-hidden transition-all duration-300 ${
				showSuggestions ? "h-60 sm:h-96" : "h-auto"
			}`}
		>
			<div className="flex flex-col relative">
				<div className="flex flex-col px-2 gap-4">
					<p className="small font-bold tracking-tight font-gta pl-3">
						Click and select your destination from the suggestions
					</p>
					{/* Input + Search button */}
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
						<button
							onClick={handleSubmit}
							disabled={!isSearchEnabled}
							className={`bg-black text-white rounded-full p-3 focus:ring-blue-300 hover:bg-black-800 focus:ring-4 focus:outline-none transition-colors flex-shrink-0 ${
								!isSearchEnabled ? "opacity-50 cursor-not-allowed" : ""
							}`}
							aria-label="Search"
						>
							{/* svg */}
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

					{/* Suggestions */}
					{showSuggestions ? (
						<SuggestionsList
							suggestions={suggestions}
							query={query}
							onSelect={handleSelect}
						/>
					) : showHistory ? (
						<UserSearchHistory onHistoryClick={handleSelect} />
					) : (
						<PopularSearches onPopularClick={handleSelect} />
					)}
					{error && (
						<p className="text-red-500 small font-bold tracking-tight font-gta pl-3">
							{error}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
