import { useState } from "react";
import { CubicInput } from "./components/CubicInput";
import CubicEquation from "./components/CubicEquation";
import CubicTable from "./components/CubicTable";
import CubicGraph from "./components/CubicGraph";
import CubicHistory from "./components/CubicHistory";
import type { CubicCoefficients, CubicResult } from "./utils/types";

function calculate({ a, b, c, d }: CubicCoefficients): CubicResult {
  const p = (3 * a * c - b ** 2) / (3 * a ** 2);
  const q = ((27 * a * a * d) - (9 * a * b * c) + (2 * b ** 3)) / (27 * a ** 3);
  const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

  let roots: (number | string)[] = [];

  if (discriminant > 0) {
    const root =
      Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
      Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
      b / (3 * a);

    roots = [root, "Complex", "Complex"];
  } else {
    roots = [0, 0, 0]; // simplified (you can plug full logic)
  }

  return { p, q, discriminant, roots };
}

export default function App() {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const [history, setHistory] = useState<CubicCoefficients[]>([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <CubicInput
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
        setHistory={setHistory}
        history={history}
      />
      <div className="text-center mt-4">
        <CubicEquation a={a} b={b} c={c} d={d} />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6"></div>
        <div className="bg-white rounded-xl shadow p-4">
          <CubicTable result = {calculate({a,b,c,d})} />
        </div>
        
        <div className="bg-white rounded-xl shadow p-4 flex justify-center">
          <CubicGraph a={a} b={b} c={c} d={d} />
        </div>
          
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">History</h3>
          <CubicHistory
            history={history}
          />
        </div>

    </div>
  );
}