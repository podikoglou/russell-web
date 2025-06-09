import { useSearchParams } from "wouter";

export interface SearchState {
  input: string | null;
  assignments: Record<string, boolean>;
}

export function useSearchState(): SearchState {
  const [searchParams] = useSearchParams();

  const input = searchParams.get("input");

  // Load assignments from search params
  const assignments: Record<string, boolean> = {};
  for (const key of searchParams.keys()) {
    if (key !== "input") {
      assignments[key] = searchParams.get(key) === "true";
    }
  }

  return { input, assignments };
}