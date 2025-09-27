"use client";
import { Profiler } from "react";

function onRender(
	id,
	phase,
	actualDuration,
	baseDuration,
	startTime,
	commitTime
) {
	console.log(`Profiler ${id}:`, {
		phase,
		actualDuration: `${actualDuration}ms`,
		baseDuration: `${baseDuration}ms`,
		startTime,
		commitTime,
	});
}

export default function ProfilerWrapper({ children }) {
	return (
		<Profiler id="App" onRender={onRender}>
			{children}
		</Profiler>
	);
}
