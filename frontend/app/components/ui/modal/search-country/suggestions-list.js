import Image from "next/image";

export default function SuggestionsList({ suggestions, query, onSelect }) {
	if (suggestions.length === 0 && query.length > 0) {
		return (
			<div className="text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-32 sm:max-h-48 overflow-y-auto">
				<div className="p-3 text-slate-500 text-center">
					No countries found matching &quot;{query}&quot;.
					<br /> Select a country from the list.
				</div>
			</div>
		);
	}

	return (
		<div className="text-black bg-white border border-gray-200 rounded-lg shadow-lg max-h-32 sm:max-h-48 overflow-y-auto">
			{suggestions.map((country) => {
				const key = country?.name?.common ?? "";
				const flag = country?.flags?.png;
				return (
					<div
						key={key}
						className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
						onClick={() => onSelect(key)}
					>
						{flag && (
							<Image
								src={flag}
								alt="flag"
								className="inline w-6 h-4 mr-2"
								height={10}
								width={12}
							/>
						)}
						{key}
					</div>
				);
			})}
		</div>
	);
}
