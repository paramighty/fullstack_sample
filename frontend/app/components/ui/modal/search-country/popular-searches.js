"use client";
import { useContext } from "react";
import { MyContext } from "@/app/context/context";

export default function PopularSearches({ onPopularClick }) {
	const { myState } = useContext(MyContext);
	const popular_searches = myState.popularSearches;

	if (!popular_searches || popular_searches.length === 0) {
		return <div className="small font-bold font-gta pl-3"></div>;
	}

	return (
		<div className="px-2">
			<p className="small font-bold font-gta pl-3 mb-2">Popular searches</p>
			<div className="flex flex-wrap gap-2 px-3">
				{popular_searches?.map((item) => (
					<button
						key={item.country_name}
						type="button"
						className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm"
						onClick={() =>
							onPopularClick(decodeURIComponent(item.country_name))
						}
					>
						{decodeURIComponent(item.country_name)}
					</button>
				))}
			</div>
		</div>
	);
}
