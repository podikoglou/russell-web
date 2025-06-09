import CodeExample from "../components/CodeExample";
import InputForm from "../components/InputForm";

const SYNTAX = [
	{ russell: "p && q", logic: "p ∧ q" },
	{ russell: "p || q", logic: "p ∨ q" },
	{ russell: "!p", logic: "¬p" },
	{ russell: "p => q", logic: "p → q" },
	{ russell: "p == q", logic: "p ↔ q" },
];

export default function CheatsheetPage() {
	return (
		<>
			<InputForm />
			<div className="max-w-2xl mx-auto my-16 space-y-12">
				<h2 className="text-heading-2 mb-4">russell cheatsheet</h2>

				<div className="property-card">
					<div className="space-y-4">
						{SYNTAX.map((item) => (
							<div
								key={item.russell}
								className="flex items-center justify-between"
							>
								<span className="text-body text-gray-600">{item.logic}</span>
								<CodeExample value={item.russell} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
