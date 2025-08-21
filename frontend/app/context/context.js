"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Creation of a React context, initially undefined.
export const MyContext = createContext();

// Context provider component that wraps child components to provide them access to its state.
export function MyContextProvider({ children }) {
	// State hook that holds and sets the state for a selected country. Initially an empty object.
	const [myState, setMyState] = useState({
		selectedCountry: {},
	});
	// Context state object that will be passed down to consumers.
	const state = { myState, setMyState };
	// The context provider component renders its children within the context provider,
	// enabling them to access the context state anywhere in the component tree.
	return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}
