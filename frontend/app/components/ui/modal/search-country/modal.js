"use client";

import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Buttons from "@/app/components/ui/buttons/buttons";
import crossIcon from "/public/icons/crossIcon.webp";
import SearchBox from "./search-box";

export default function Modal() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const modal = searchParams.get("search");

	if (!modal) return null;

	return (
		<section className="fixed left-0 top-0 w-screen h-screen bg-[#DBCCFC] z-50 overflow-hidden backdrop-blur flex flex-col justify-start items-center px-2 pt-32">
			<div className="flex flex-col">
				<Link href={pathname} className="self-end">
					<Buttons icon={true} src={crossIcon} />
				</Link>

				<h2 className="h2 font-druk text-center">
					SEARCH FOR YOUR DESTINATION
				</h2>

				<Suspense fallback={<div>Loading...</div>}>
					<SearchBox />
				</Suspense>
			</div>
		</section>
	);
}
