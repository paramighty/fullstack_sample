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
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/popular-searches`
			);
			const data = await response.json();
			console.log("API data:", data);
			setMyState((currentState) => ({
				...currentState,
				popularSearches: data,
			}));
		}
		fetchPopularSearches();
	}, []);

	useEffect(() => {}, [myState.popularSearches]);

	const state = { myState, setMyState };

	return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}
