import type { CubicResult } from "../utils/types";

export default function CubicTable({ result }: { result: CubicResult }) {
  const fmt = (r: number | string) =>
    typeof r === "number" ? r.toFixed(2) : r;

  return (
    <div>
      <table className="table-auto border">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>discriminant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fmt(result.p)}</td>
            <td>{fmt(result.q)}</td>
            <td>{fmt(result.discriminant)}</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto border mt-4">
        <thead>
          <tr>
            <th>root1</th>
            <th>root2</th>
            <th>root3</th>
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