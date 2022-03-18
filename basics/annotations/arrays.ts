const carMakers = ["ford"];

const carMaker: number[] = [1, 2, 3, 4];

// 2D array

const carsByMaker: string[][] = [
  ["1", "2"],
  ["3", "4"],
];

carMaker.map((car: number): number => {
  return car;
});

// Multiple typed array

const importAnt: (string | number)[] = ["hello", 1];
