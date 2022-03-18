/**
 * Add two numbers together and return the result as a number
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number}
 */
const add = (a: number, b: number): number => {
  return a + b;
};

function add2(a: number, b: number): number {
  return a + b;
}

/**
 * It takes two numbers and return nothing(void)
 * @param {number} a - number
 * @param {number} b - number
 */
const noReturn = (a: number, b: number): void => {};

// Objects as arguments

const obj = {
  a: 10,
  b: 20,
};

const logWeather = (obj: { a: number; b: number }) => {};

// With destructuring

const logWeather2 = ({ a, b }: { a: number; b: number }) => {};
