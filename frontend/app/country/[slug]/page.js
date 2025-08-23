import SearchCountry from "../../components/country/searchCountry";
import { getCountry } from "@/lib/countries";

export async function generateMetadata({ params }) {
	const country = await getCountry(params.slug);
	return {
		title: country?.name?.common || "Country",
		description: `Information about ${country?.name?.common}`,
	};
}

export default async function Country({ params }) {
	return <SearchCountry params={params} />;
}
