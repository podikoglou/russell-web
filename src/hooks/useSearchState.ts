import { useSearch } from "@tanstack/react-router";

export interface SearchState {
	input: string | null;
	assignments: Record<string, boolean>;
}

export function useSearchState(): SearchState {
	const search = useSearch({ strict: false });

	const input = search.input || null;

	const assignments: Record<string, boolean> = {};

	for (const [key, value] of Object.entries(search)) {
		if (!isValidAssignmentKey(key)) continue;

		const booleanValue = parseBooleanValue(value as string);

		if (booleanValue !== null) {
			assignments[key] = booleanValue;
		}
	}

	return { input, assignments };
}

function isValidAssignmentKey(key: string): boolean {
	return key.length === 1 && key !== "input";
}

function parseBooleanValue(value: string | null): boolean | null {
	if (value === "true") return true;
	if (value === "false") return false;
	return null;
}
