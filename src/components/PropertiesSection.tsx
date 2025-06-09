import StatusDisplay from "./StatusDisplay";

interface Property {
	name: string;
	value: boolean;
	description?: string;
}

interface PropertiesSectionProps {
	properties: Property[];
}

export default function PropertiesSection({
	properties,
}: PropertiesSectionProps) {
	if (properties.length === 0) {
		return null;
	}

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">logical properties</h2>
			<div className="flex flex-wrap gap-4">
				{properties.map((property) => (
					<div key={property.name} className="flex flex-col items-center gap-2">
						<StatusDisplay label={property.name} value={property.value} />
						{property.description && (
							<p className="text-sm text-gray-600">{property.description}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
