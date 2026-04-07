import type { CubicResult } from "../utils/types";

export default function CubicTable({ result }: { result: CubicResult }) {
  const fmt = (r: number | string) =>
    typeof r === "number" ? r.toFixed(2) : r;

  return (
    <div className="mt-4 border-t pt-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b">p</th>
            <th className="text-left p-2 border-b">q</th>
            <th className="text-left p-2 border-b">discriminant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{fmt(result.p)}</td>
            <td className="p-2">{fmt(result.q)}</td>
            <td className="p-2">{fmt(result.discriminant)}</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b">root1</th>
            <th className="text-left p-2 border-b">root2</th>
            <th className="text-left p-2 border-b">root3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {result.roots.map((r, i) => (
              <td key={i}>{fmt(r)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}