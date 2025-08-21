// lib/countries.js
export async function getCountry(slug) {
	const res = await fetch(`http://localhost:8080/api/countries/${slug}`);
	if (!res.ok) throw new Error("Country not found");
	const data = await res.json();
	return Array.isArray(data) ? data[0] : data;
}
