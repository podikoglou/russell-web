interface TruthTableRow {
	[key: string]: boolean;
	result: boolean;
}

interface TruthTableProps {
	truthTable: TruthTableRow[];
	proposition: string;
}

export default function TruthTable({
	truthTable,
	proposition,
}: TruthTableProps) {
	if (!truthTable || truthTable.length === 0) {
		return null;
	}

	const variables = Object.keys(truthTable[0]).filter(
		(key) => key !== "result",
	);

	return (
		<div className="property-card">
			<h3 className="text-heading-3 mb-6">truth table</h3>

			<div className="overflow-x-auto">
				<table className="w-full text-body-sm">
					<thead>
						<tr className="border-b border-gray-200">
							{/* Variable columns */}
							{variables.map((varName) => (
								<th
									key={varName}
									className="pb-2 px-3 text-left text-gray-600 font-medium"
								>
									{varName}
								</th>
							))}
							{/* Result column */}
							<th className="pb-2 px-3 text-left text-gray-600 font-medium">
								{proposition}
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{truthTable.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{/* Variable values */}
								{variables.map((varName) => (
									<td
										key={`${rowIndex}-${varName}`}
										className="py-2 px-3 font-mono"
									>
										{row[varName] ? "1" : "0"}
									</td>
								))}
								{/* Result value */}
								<td
									className={`py-2 px-3 font-mono ${row.result ? "text-green-700" : "text-red-700"}`}
								>
									{row.result ? "1" : "0"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
