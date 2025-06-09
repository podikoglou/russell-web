interface StatusDisplayProps {
	label: string;
	value: boolean;
	className?: string;
}

export default function StatusDisplay({
	label,
	value,
	className = "",
}: StatusDisplayProps) {
	return (
		<div className={`flex items-center justify-between ${className}`}>
			<span className="text-heading-3 text-gray-700">{label}</span>
			<div
				className={`text-body px-4 py-2 rounded font-mono ${
					value ? "status-true" : "status-false"
				}`}
			>
				{value ? "true" : "false"}
			</div>
		</div>
	);
}
