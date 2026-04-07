import type { CubicCoefficients } from "../utils/types";

type Props = {
  history: CubicCoefficients[];
};

export default function CubicHistory({ history }: Props) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead className="bg-orange-500 text-white">
        <tr className="hover:bg-gray-100 cursor-pointer transition">
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr
            key={index}
            className="cursor-pointer hover:bg-gray-200"
          >
            <td>{item.a}</td>
            <td>{item.b}</td>
            <td>{item.c}</td>
            <td>{item.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}