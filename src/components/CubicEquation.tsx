import type { CubicCoefficients } from "../utils/types";

export default function CubicEquation({ a, b, c, d }: CubicCoefficients) {
  const parts: string[] = [];

  if (a !== 0) parts.push(`${a === 1 ? "" : a}x³`);
  if (b !== 0)
    parts.push(`${b > 0 ? "+" : "-"} ${Math.abs(b)}x²`);
  if (c !== 0)
    parts.push(`${c > 0 ? "+" : "-"} ${Math.abs(c)}x`);
  if (d !== 0)
    parts.push(`${d > 0 ? "+" : "-"} ${Math.abs(d)}`);

  return <h2 className="text-lg">{parts.join(" ")} = 0</h2>;
}