let num: number = 5; // will only accept numbers;
let speed: string = "fast"; // only accept string, can't be changed to num etc;

// same with boolean, undefined,null,date etc

// Arrays

let colors: string[] = ["red", "blue"]; // array of type strings
let nums: number[] = [1, 2]; // array of type numbers
// array of type boolean etcc...

// Class

class Car {}

let car: Car = new Car();

// Objects

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions

/**
 * `logNum` is a function that takes a number and returns nothing(void)
 * @param {number} i - number is a number parameter.
 */
const logNum: (i: number) => void = (i: number) => {};

let isFunc: (a: number) => boolean; // telling that isFunc can be initialised as a function with return type boolean

let func = (a: number, b: number): void => {};

// Functions with callbacks

let callFunc = (a: number, b: number, cb: (num: number) => void) => {
  cb(a + b);
};
// Dealing with JSON objcts.(type:any)

const json = '{"x":10, "y":20}';

const cords: { x: number; y: number } = JSON.parse(json); // Tells us that the object will contain x and y and as a number. If not provided it will be of type: any. We should avoid type: any as much as possible

// cords.x => accessible, cords.w => not accessible

// Initializing and then decalring later on

let isAdmin: boolean;

isAdmin = true;

// If the value must have multiple types and it is not known or // Union types

let data: boolean | string;

let example: "is-true" | "is-false"; // custom

data = "xyzw"; // data = true,  value can either be string or a boolean
example = "is-true"; //

// Type aliases

type BooleanCheck = Boolean | String;

let custom: BooleanCheck;

// More of functions in functions.ts

// never return type: For basically functions throwing errors

// unknown: for values that are not known(it's types are not known)
