import { useState } from "react";
import Code from "./Code";

export default function CodeExample({
  value,
  tooltip,
}: {
  tooltip: string;
} & Parameters<typeof Code>[0]) {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={({ clientX, clientY }) =>
        setCoords({ x: clientX, y: clientY })
      }
      className="bg-gray-100 px-2 py-1 rounded-md"
    >
      <a href={`/p?input=${encodeURIComponent(value)}`}>
        <Code value={value} />
      </a>

      {hovered && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: coords.x + 6,
            top: coords.y + 6,
          }}
        >
          <div className="bg-gray-900 text-white text-sm rounded px-2 py-1">
            <p>{tooltip}</p>
          </div>
        </div>
      )}
    </div>
  );
}
