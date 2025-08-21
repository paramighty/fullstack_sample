import HeroComponent from "./components/heroComponent/heroComponent";

export const metadata = {
	title: "Home",
	description: "Learn more about Minority Travel and our mission.",
};

export default function Home() {
	return (
		<main className="flex flex-col justify-center content-center">
			<HeroComponent />
		</main>
	);
}
