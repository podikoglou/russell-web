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
		<div className={`flex flex-col items-center gap-2 ${className}`}>
			<h2 className="text-2xl font-bold">{label}</h2>
			<div
				className={`text-xl font-bold px-6 py-3 rounded-lg ${
					value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
				}`}
			>
				{value ? "true" : "false"}
			</div>
		</div>
	);
}
