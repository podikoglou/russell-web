import { useSearch } from "@tanstack/react-router";

export interface SearchState {
	input: string | null;
}

export function useSearchState(): SearchState {
	const search = useSearch({ strict: false });

	const input = search.input || null;

	return { input };
}
