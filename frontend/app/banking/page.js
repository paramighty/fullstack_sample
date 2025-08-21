"use client";
import { Suspense } from "react";

export default function Banking() {
	return <Suspense fallback={<div>Loading...</div>} />;
}
