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

			<div className="flex flex-col items-center gap-4 my-12">
				<h1 className="text-xl">some laws, for example</h1>

				<table>
					<tbody>
						{EXAMPLES.map((examples, idx) => {
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<tr key={idx}>
									{examples.map((example) => {
										return (
											<td key={example.name}>
												<div className="m-0.5 mx-4">
													<CodeExample
														value={example.proposition}
														tooltip={example.name}
													/>
												</div>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
