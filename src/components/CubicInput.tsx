import type { CubicCoefficients } from "../utils/types";

type Props = {
  values: CubicCoefficients;
  onChange: (values: CubicCoefficients) => void;
  onSave: () => void;
};

export default function CubicInput({ values, onChange, onSave }: Props) {
  const handleChange = (key: keyof CubicCoefficients, value: number) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Cubic Solver</h2>

      {(["a", "b", "c", "d"] as const).map((key) => (
        <label key={key} className="block">
          {key}-value
          <input
            type="number"
            value={values[key]}
            onChange={(e) => handleChange(key, Number(e.target.value))}
            className="border ml-2"
          />
        </label>
      ))}

      <button
        onClick={onSave}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Save
      </button>
    </section>
  );
}