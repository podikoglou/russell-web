import { useEffect, useState } from "react";
import { useEngine } from "../context/EngineContext";

interface Property {
	name: string;
	value: boolean;
	description?: string;
}

interface EvaluationResult {
	properties: Property[];
	error: string | undefined;
	truthTable: any;
}

export function useEngineEvaluation(input: string | null): EvaluationResult {
	const { engine } = useEngine();
	const [state, setState] = useState<EvaluationResult>({
		properties: [],
		error: undefined,
		truthTable: null,
	});

	useEffect(() => {
		if (!engine || !input) {
			setState({
				properties: [],
				error: undefined,
				truthTable: null,
			});
			return;
		}

		try {
			// Handle all operations that might fail
			const tautology = engine.check_tautology(input);
			const contradiction = engine.check_contradiction(input);
			const contingency = engine.check_contingency(input);
			const table = engine.compute_truth_table(input);

			// Only update state if all operations succeeded
			setState({
				properties: [
					{ name: "tautology", value: tautology },
					{ name: "contradiction", value: contradiction },
					{ name: "contingency", value: contingency },
				],
				truthTable: table,
				error: undefined,
			});
		} catch (e) {
			setState({
				properties: [],
				truthTable: null,
				error: String(e),
			});
		}
	}, [engine, input]);

	return state;
}
