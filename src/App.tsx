import { useState } from "react";
import CubicInput from "./components/CubicInput";
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
  const [values, setValues] = useState<CubicCoefficients>({
    a: 1,
    b: 0,
    c: 0,
    d: 0,
  });

  const [result, setResult] = useState<CubicResult>(
    calculate(values)
  );

  const [history, setHistory] = useState<CubicCoefficients[]>([]);

  const handleChange = (vals: CubicCoefficients) => {
    setValues(vals);
    setResult(calculate(vals));
  };

  const handleSave = () => {
    setHistory([...history, values]);
  };

  return (
    <div className="p-4">
      <CubicInput
        values={values}
        onChange={handleChange}
        onSave={handleSave}
      />

      <CubicEquation {...values} />

      <CubicTable result={result} />

      <CubicGraph {...values} />

      <CubicHistory
        history={history}
        onSelect={(item) => handleChange(item)}
      />
    </div>
  );
}