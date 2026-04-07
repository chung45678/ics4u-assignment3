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

export interface inputProps{
  setA: (value: number) => void; 
  setB: (value: number) => void; 
  setC: (value: number) => void; 
  setD: (value: number) => void;
  setHistory: (value: CubicCoefficients[]) => void;
  history: CubicCoefficients[];
}

export interface historyProps{
  historyList: CubicCoefficients[];
}