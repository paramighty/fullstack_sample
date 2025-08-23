"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
	const [myState, setMyState] = useState({
		selectedCountry: {},
	});

	const state = { myState, setMyState };

	return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}
