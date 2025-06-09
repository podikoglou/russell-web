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

	const [properties, setProperties] = useState<Property[]>([]);
	const [truthTable, setTruthTable] = useState<any | null>(null);

	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (!engine || !input) {
			setProperties([]);
			setError(undefined);
			return;
		}

		try {
			// if (input) {
			// 	const evalResult = engine.eval(input);

			// 	setResult(evalResult);
			// 	setProperties([]);
			// }

			// check for properties (right now, just tautology)
			setProperties([
				{ name: "tautology", value: engine.check_tautology(input) },
				{ name: "contradiction", value: engine.check_contradiction(input) },
				{ name: "contingency", value: engine.check_contingency(input) },
			]);

			setTruthTable(engine.compute_truth_table(input));

			setError(undefined);
		} catch (e) {
			setError(String(e));
			setProperties([]);
		}
	}, [engine, input]);

	// gosh
	if (!truthTable) {
		throw new Error("Truth table is undefined");
	}

	console.log(truthTable);

	return { properties, truthTable, error };
}
