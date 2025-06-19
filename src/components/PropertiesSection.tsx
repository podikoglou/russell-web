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
		<div className="property-card">
			<h3 className="text-heading-3 mb-6">logical properties</h3>

			<div className="space-y-4">
				{properties.map((property) => (
					<div
						key={property.name}
						className="flex items-center justify-between"
					>
						<span className="text-body text-primary">{property.name}</span>
						<div
							className={`text-body-sm px-3 py-1 rounded font-mono ${
								property.value ? "status-true" : "status-false"
							}`}
						>
							{property.value ? "true" : "false"}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
