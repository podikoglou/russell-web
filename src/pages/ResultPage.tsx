import InputForm from "../components/InputForm";
import PropertiesSection from "../components/PropertiesSection";
import TruthTable from "../components/TruthTable";
import { useEngine } from "../context/EngineContext";
import { useEngineEvaluation } from "../hooks/useEngineEvaluation";
import { useSearchState } from "../hooks/useSearchState";

function LoadingState() {
	return (
		<>
			<InputForm />
			<div className="flex flex-col items-center my-12">
				<p className="text-body text-secondary">loading engine...</p>
			</div>
		</>
	);
}

function ErrorState({ error }: { error: string }) {
	return (
		<div className="w-full flex flex-col items-center gap-6">
			<div className="w-full">
				<InputForm />
			</div>
			<div className="text-center">
				<p className="text-heading-2 text-red-600 mb-2">error</p>
				<p className="text-body text-secondary">{error}</p>
			</div>
		</div>
	);
}

export default function ResultPage() {
	const { isLoading, error: engineError } = useEngine();
	const { input } = useSearchState();
	const { properties, truthTable, error } = useEngineEvaluation(input);

	// Early returns for error states
	if (isLoading) {
		return <LoadingState />;
	}

	if (engineError || error) {
		return <ErrorState error={engineError || error || "Unknown error"} />;
	}

	if (!input) {
		return <ErrorState error="no input provided" />;
	}

	return (
		<>
			<InputForm />
			<div className="max-w-4xl mx-auto space-y-8">
				{/* Input Display */}
				<div className="text-center">
					<div className="code-block text-heading-3 max-w-2xl mx-auto">
						{input}
					</div>
				</div>

				{/* Main Results */}
				<div className="space-y-8">
					{/* Properties Section */}
					<PropertiesSection properties={properties} />

					{/* Truth Table */}
					<TruthTable truthTable={truthTable} proposition={input} />
				</div>
			</div>
		</>
	);
}
