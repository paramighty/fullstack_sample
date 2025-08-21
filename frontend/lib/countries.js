// lib/countries.js
export async function getCountry(slug) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/api/countries/${slug}`
	);
	if (!res.ok) throw new Error("Country not found");
	const data = await res.json();
	return Array.isArray(data) ? data[0] : data;
}
