"use client";

import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
	const [myState, setMyState] = useState({
		selectedCountry: {},
		popularSearches: [],
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState(null);

	const checkAuth = () => {
		// 1. Call /api/auth/me
		async function fetchCheckAuth() {
			console.log("Me URL:", `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`);

			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
				{ credentials: "include" }
			);

			if (!response.ok) {
				setIsLoggedIn(false);
				setUserData(null);

				return;
			}
			const data = await response.json();
			setIsLoggedIn(true);
			setUserData(data.user);
		}
		fetchCheckAuth();
	};

	const logOut = () => {
		async function fetchLogOut() {
			try {
				console.log(
					"logout URL:",
					`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`
				);

				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						credentials: "include",
					}
				);

				setIsLoggedIn(false);
				setUserData(null);

				if (!response.ok) {
					const error = await response.json();
					console.log(error);
				}
			} catch (error) {
				console.log(error);
			}
		}
		fetchLogOut();
	};
	useEffect(() => {
		checkAuth();
	}, []);

	useEffect(() => {
		const controller = new AbortController();

		async function fetchPopularSearches() {
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/popular-searches`,
					{ signal: controller.signal }
				);

				const data = await response.json();
				setMyState((prevState) => ({
					...prevState,
					popularSearches: data,
				}));
			} catch (err) {
				if (err.name !== "AbortError") {
					console.log("Popular searches error:", err);
				}
			}
		}

		fetchPopularSearches();

		return () => {
			controller.abort();
		};
	}, []);

	// useEffect(() => {
	// 	console.log("popularSearches updated:", myState.popularSearches);
	// }, [myState.popularSearches]);

	const state = {
		myState,
		setMyState,
		isLoggedIn,
		setIsLoggedIn,
		userData,
		setUserData,
		logOut,
	};

	return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
}
