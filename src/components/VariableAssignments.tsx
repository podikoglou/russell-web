interface VariableAssignmentsProps {
  assignments: Record<string, boolean>;
}

export default function VariableAssignments({
  assignments,
}: VariableAssignmentsProps) {
  if (Object.keys(assignments).length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">variable assignments</h2>
      <div className="flex flex-col gap-2">
        {Object.entries(assignments).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}
