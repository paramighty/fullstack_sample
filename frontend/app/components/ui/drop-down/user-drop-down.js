import { useState, useEffect, useContext, useRef } from "react";

import { useRouter } from "next/navigation";
import { MyContext } from "@/app/context/context";
import Buttons from "../buttons/buttons";

export default function UserDropDown() {
	const { isLoggedIn, userData, logOut } = useContext(MyContext);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const userName = userData?.user_metadata.fullName;

	const handleClick = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};
	const handleLogout = async () => {
		await logOut();
		router.push("/login");
		setIsOpen(false);
	};

	const handleClickOutside = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		}
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div ref={dropdownRef} className="relative inline-block ">
			<button
				className="rounded-lg px-5 py-2.5 text-center inline-flex items-center text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900"
				onClick={handleClick}
				type="button"
			>
				{userName}
				<svg
					className="w-2.5 h-2.5 ms-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="absolute left-0 md:right-0 bottom-full md:top-full mb-2 md:mt-2 md:mb-0 w-full md:w-56 shadow-lg rounded-lg">
					<div className="py-2 bg-white">
						<a
							href="#"
							className="block rounded-lg items-center px-4 py-3 md:px-3 md:py-2 text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900 mx-2 text-base md:text-sm"
							onClick={() => setIsOpen(false)}
						>
							My account
						</a>
						<a
							href="#"
							className="block rounded-lg items-center px-4 py-3 md:px-3 md:py-2 text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900 mx-2 text-base md:text-sm"
							onClick={() => setIsOpen(false)}
						>
							Support
						</a>
						<form action="#" method="POST">
							<Buttons
								ctaBtn={true}
								className="w-full text-left block rounded-lg items-center px-4 py-3 md:px-3 md:py-2 text-black font-medium font-gta hover:bg-slate-100 hover:text-slate-900 mx-2 text-base md:text-sm"
								onClick={handleLogout}
							>
								Log Out
							</Buttons>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
