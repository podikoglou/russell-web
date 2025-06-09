import { Link } from "@tanstack/react-router";
import { FaBook, FaGithub, FaYoutube } from "react-icons/fa";
import CodeExample from "../components/CodeExample";
import InputForm from "../components/InputForm";

const EXAMPLES = [
	[
		{ proposition: "p && (p || q) == p", name: "absorption laws (1)" },
		{ proposition: "p || (p && q) == p", name: "absorption laws (2)" },
	],
	[
		{
			proposition: "p && (q || r) == (p && q) || (p && r)",
			name: "distributive laws (conjunction over disjunction)",
		},
		{
			proposition: "p || (q && r) == (p || q) && (p || r)",
			name: "distributive laws (disjunction over conjunction)",
		},
	],
	[
		{ proposition: "!(p && q) == !p || !q", name: "de morgan's laws (1)" },
		{ proposition: "!(p || q) == !p && !q", name: "de morgan's laws (2)" },
	],

	[{ proposition: "!q => !p == p => q", name: "contrapositive" }],
	[{ proposition: "!!p == p", name: "double negation" }],
	[{ proposition: "p => q == !p || q", name: "material implication" }],
];

export default function IndexPage() {
	return (
		<>
			<InputForm />

			<div className="max-w-4xl mx-auto space-y-12">
				{/* Introduction */}
				<div className="text-center">
					<h2 className="text-heading-2 mb-4">examples</h2>
					<p className="text-body text-gray-600">
						click any proposition to analyze it
					</p>
				</div>

				{/* Examples Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{EXAMPLES.map((examples, idx) => {
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={idx} className="space-y-3">
								{examples.map((example) => {
									return (
										<div key={example.name} className="property-card">
											<h3 className="text-body-sm text-gray-600 mb-3">
												{example.name}
											</h3>
											<CodeExample value={example.proposition} />
										</div>
									);
								})}
							</div>
						);
					})}
				</div>

				{/* Links */}
				<div className="text-center border-t border-gray-200 pt-12">
					<div className="flex justify-center gap-8">
						<a
							href="https://github.com/podikoglou/russell"
							className="flex items-center gap-2 text-body text-gray-600 hover:text-gray-800"
						>
							<FaGithub className="w-5 h-5" />
							<span>github</span>
						</a>
						<Link
							to="/cheatsheet"
							className="flex items-center gap-2 text-body text-gray-600 hover:text-gray-800"
						>
							<FaBook className="w-5 h-5" />
							<span>cheatsheet</span>
						</Link>
						<a
							href="https://youtu.be/av64lVQBvg0"
							className="flex items-center gap-2 text-body text-gray-600 hover:text-gray-800"
						>
							<FaYoutube className="w-5 h-5" />
							<span>demo</span>
						</a>
					</div>
				</div>

				{/* Quote */}
				<div className="text-center border-t border-gray-200 pt-12 mt-12">
					<p className="text-body-sm text-gray-500 italic">
						"although this may seem a paradox, all exact science is dominated by
						the idea of approximation."
					</p>
					<p className="text-body-sm text-gray-400 mt-2">
						—{" "}
						<a href="https://en.wikipedia.org/wiki/Bertrand_Russell">
							bertrand russell
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
