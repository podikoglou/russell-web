import { useSearchParams } from "wouter";
import InputForm from "../components/InputForm";
import { useEngine } from "../context/EngineContext";
import { useState, useEffect } from "react";

export default function ResultPage() {
  const { engine, isLoading, error: engineError } = useEngine();
  const [searchParams, _] = useSearchParams();
  const [error, setError] = useState<string | undefined>(undefined);
  const [result, setResult] = useState<boolean | null>(null);

  const input = searchParams.get("input");

  // Load assignments from search params
  const assignments: Record<string, boolean> = {};
  for (const key of searchParams.keys()) {
    if (key !== "input") {
      assignments[key] = searchParams.get(key) === "true";
    }
  }

  // Evaluate proposition when engine and input are ready
  useEffect(() => {
    if (!engine || !input) return;

    try {
      // You were passing {} instead of assignments!
      const evalResult = engine.eval(input, assignments);
      setResult(evalResult);
      setError(undefined);
    } catch (e) {
      setError(String(e));
      setResult(null);
    }
  }, [engine, input, JSON.stringify(assignments)]); // Re-run when assignments change

  // Early returns for error states
  if (isLoading) {
    return (
      <>
        <InputForm />
        <div className="flex flex-col items-center my-8">
          <h2 className="text-2xl">loading engine...</h2>
        </div>
      </>
    );
  }

  if (engineError || error) {
    return (
      <>
        <h1 className="text-4xl">whoops!</h1>
        <h2 className="text-2xl">{engineError || error}</h2>
      </>
    );
  }

  if (!input) {
    return (
      <>
        <h1 className="text-4xl">whoops!</h1>
        <h2 className="text-2xl">you forgot to give input!</h2>
      </>
    );
  }

  if (!engine) {
    return (
      <>
        <h1 className="text-4xl">whoops!</h1>
        <h2 className="text-2xl">engine not available</h2>
      </>
    );
  }

  return (
    <>
      <InputForm />
      <div className="flex flex-col items-center my-8 gap-12">
        <h2 className="text-2xl font-mono bg-gray-100 px-4 py-2 rounded">
          {input}
        </h2>

        {Object.keys(assignments).length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">variable assignments</h2>
            <ul className="space-y-2">
              {Object.entries(assignments).map(([key, value]) => (
                <li key={key} className="flex items-center gap-2">
                  <span className="font-mono">{key}:</span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      value
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {value ? "true" : "false"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result !== null && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">result</h2>
            <div
              className={`text-xl font-bold px-6 py-3 rounded-lg ${
                result
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {result ? "true" : "false"}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
