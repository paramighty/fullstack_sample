"use client";

import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
	const [myState, setMyState] = useState({
		selectedCountry: {},
		popularSearches: [],
	});

	useEffect(() => {
		async function fetchPopularSearches() {
			console.log("API URL = ", process.env.NEXT_PUBLIC_API_URL);

			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/popular-searches`
			);
			const data = await response.json();
			console.log("API data:", data);
			setMyState({ ...myState, popularSearches: data });
		}
		fetchPopularSearches();
	}, []);

	useEffect(() => {
		console.log("popularSearches updated:", myState.popularSearches);
	}, [myState.popularSearches]);

	const state = { myState, setMyState };

	return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}
