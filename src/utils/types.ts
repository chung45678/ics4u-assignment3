export type CubicCoefficients = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export type CubicResult = {
  p: number;
  q: number;
  discriminant: number;
  roots: (number | string)[];
};