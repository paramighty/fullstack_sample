import SearchCountry from "./searchCountry";
import { getCountry } from "@/lib/countries";

export async function generateMetadata({ params }) {
	const country = await getCountry(params.slug);
	return {
		title: country?.name?.common || "Country",
		description: `Information about ${country?.name?.common}`,
	};
}

export default async function Country({ params }) {
	const country = await getCountry(params.slug);
	return <SearchCountry params={params} initialCountry={country} />;
}
