import { useState, useEffect } from "react";
import { useEngine } from "../context/EngineContext";

interface Property {
  name: string;
  value: boolean;
  description?: string;
}

interface EvaluationResult {
  result: boolean | null;
  properties: Property[];
  error: string | undefined;
}

export function useEngineEvaluation(
  input: string | null,
  assignments: Record<string, boolean>,
): EvaluationResult {
  const { engine } = useEngine();
  const [result, setResult] = useState<boolean | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!engine || !input) {
      setResult(null);
      setProperties([]);
      setError(undefined);
      return;
    }

    try {
      const hasAssignments = Object.keys(assignments).length > 0;

      // if there are assignments, evaluate the proposition
      if (hasAssignments) {
        const evalResult = engine.eval(input, assignments);

        setResult(evalResult);
        setProperties([]);
      }

      // check for properties (right now, just tautology)
      setProperties([
        { name: "tautology", value: engine.check_tautology(input) },
      ]);

      setError(undefined);
    } catch (e) {
      setError(String(e));
      setResult(null);
      setProperties([]);
    }
  }, [engine, input, JSON.stringify(assignments)]);

  return { result, properties, error };
}
