import TextAnimation from "./textAnimation";
import Buttons from "@/app/components/buttons/buttons";
import globeIcon from "/public/icons/worldIcon.webp";
import HeroModal from "./modal";
import Link from "next/link";

export default function HeroComponent() {
	return (
		// Full-screen hero component with dynamic background and sticky positioning.

		<div className="h-screen bg-[#794DFF] max-h-[1060px] w-full sticky">
			<div className="px-0 pt-8 h-screen m-auto max-w-[1680px] min-w-[256px]">
				{/* Container for vertically and horizontally centering content within the hero */}
				<div className="h-full w-full">
					<div className="flex flex-col content-center items-center justify-center h-full min-w-[293px] w-full px-8  2xl:px-16">
						{/* Main heading for the hero section. */}
						<h1 className="h1 font-druk leading-none uppercase text-center text-[#E7F3E7]">
							TRAVELLING TO
						</h1>
						{/* Container for text animation */}
						<div className="flex -z-20 flex-col-reverse relative h-[80px] min-w-[318px] 2xl:h-[120px] w-full justify-center">
							<TextAnimation />
						</div>
						{/* Descriptive text to engage users and provide context. */}
						<p className="p text-white font-light text-center min-w-fit max-w-[720px] pt-4 leading-7">
							Locals appreciate when you know about their country. Learn about
							any country before visiting it. Be respectful.
						</p>
						{/* Button that triggers a modal for searching destinations. */}
						<div className="w-90 shrink-0 whitespace-nowrap">
							<Link href="?modal=true">
								<Buttons
									icon={true}
									ctaBtn={true}
									src={globeIcon}
									className="bg-[#BEF300] font-gta sm font-thin p-4 rounded-full m-8 flex flex-row items-center shrink-0 gap-2 min-w-[240px]"
									children="search your destination"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
