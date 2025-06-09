interface VariableAssignmentsProps {
	assignments: Record<string, boolean>;
}

export default function VariableAssignments({
	assignments,
}: VariableAssignmentsProps) {
	if (Object.keys(assignments).length === 0) {
		return null;
	}

	return (
		<div className="property-card">
			<h3 className="text-heading-3 mb-6">variable assignments</h3>
			<div className="space-y-3">
				{Object.entries(assignments).map(([key, value]) => (
					<div key={key} className="flex items-center justify-between">
						<span className="text-body font-mono text-gray-700">{key}</span>
						<div
							className={`text-body-sm px-3 py-1 rounded font-mono ${
								value ? "status-true" : "status-false"
							}`}
						>
							{value ? "true" : "false"}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
