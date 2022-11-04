export {};

const reducer = (accumlator: number, currentValue: number) => {
  console.log({ accumlator, currentValue });
  return accumlator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
