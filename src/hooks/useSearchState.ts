import { useSearchParams } from "wouter";

export interface SearchState {
  input: string | null;
  assignments: Record<string, boolean>;
}

export function useSearchState(): SearchState {
  const [searchParams] = useSearchParams();

  const input = searchParams.get("input");

  const assignments: Record<string, boolean> = {};

  for (const key of searchParams.keys()) {
    if (!isValidAssignmentKey(key)) continue;

    const value = searchParams.get(key);
    const booleanValue = parseBooleanValue(value);
    
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