import InputForm from "../components/InputForm";
import PropertiesSection from "../components/PropertiesSection";
import StatusDisplay from "../components/StatusDisplay";
import VariableAssignments from "../components/VariableAssignments";
import { useEngine } from "../context/EngineContext";
import { useEngineEvaluation } from "../hooks/useEngineEvaluation";
import { useSearchState } from "../hooks/useSearchState";

function LoadingState() {
	return (
		<>
			<InputForm />
			<div className="flex flex-col items-center my-8">
				<h2 className="text-2xl">loading engine...</h2>
			</div>
		</>
	);
}

function ErrorState({ error }: { error: string }) {
	return (
		<>
			<h1 className="text-4xl">whoops!</h1>
			<h2 className="text-2xl">{error}</h2>
		</>
	);
}

export default function ResultPage() {
	const { isLoading, error: engineError } = useEngine();
	const { input, assignments } = useSearchState();
	const { result, properties, error } = useEngineEvaluation(input, assignments);

	// Early returns for error states
	if (isLoading) {
		return <LoadingState />;
	}

	if (engineError || error) {
		return <ErrorState error={engineError || error || "Unknown error"} />;
	}

	if (!input) {
		return <ErrorState error="you forgot to give input!" />;
	}

	return (
		<>
			<InputForm />
			<div className="flex flex-col items-center my-8 gap-12">
				<h2 className="text-2xl font-mono bg-gray-100 px-4 py-2 rounded">
					{input}
				</h2>

				<VariableAssignments assignments={assignments} />

				{result !== null && <StatusDisplay label="result" value={result} />}

				<PropertiesSection properties={properties} />
			</div>
		</>
	);
}
