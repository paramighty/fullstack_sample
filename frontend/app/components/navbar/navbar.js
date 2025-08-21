"use client";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar() {
	return (
		<div className="z-70">
			<DesktopNavbar />
			<MobileNavbar />
		</div>
	);
}
