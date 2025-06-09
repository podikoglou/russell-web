import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import init, { WasmEngine } from "russell_engine";

interface EngineContextType {
	engine: WasmEngine | null;
	isLoading: boolean;
	error: string | null;
}

const EngineContext = createContext<EngineContextType | undefined>(undefined);

export const EngineProvider = ({ children }: { children: ReactNode }) => {
	const [engine, setEngine] = useState<WasmEngine | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const initEngine = async () => {
			try {
				await init();

				const wasmEngine = new WasmEngine();

				setEngine(wasmEngine);
			} catch (err) {
				console.error("Failed to initialize WASM:", err);

				setError(
					err instanceof Error ? err.message : "Failed to initialize WASM",
				);
			} finally {
				setIsLoading(false);
			}
		};
		initEngine();
	}, []);

	return (
		<EngineContext.Provider value={{ engine, isLoading, error }}>
			{children}
		</EngineContext.Provider>
	);
};

export const useEngine = () => {
	const context = useContext(EngineContext);

	if (!context) {
		throw new Error("useEngine must be used within a EngineProvider");
	}

	return context;
};
