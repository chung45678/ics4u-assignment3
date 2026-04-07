import type { CubicCoefficients } from "../utils/types";

type Props = {
  history: CubicCoefficients[];
};

export default function CubicHistory({ history }: Props) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead className="bg-orange-500 text-white">
        <tr className="hover:bg-gray-100 cursor-pointer transition">
          <th className="text-center p-2">a</th>
          <th className="text-center p-2">c</th>
          <th className="text-center p-2">d</th>
          <th className="text-center p-2">b</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr
            key={index}
            className="cursor-pointer hover:bg-gray-200"
          >
            <td className="text-center p-2">{item.a}</td>
            <td className="text-center p-2">{item.b}</td>
            <td className="text-center p-2">{item.c}</td>
            <td className="text-center p-2">{item.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}