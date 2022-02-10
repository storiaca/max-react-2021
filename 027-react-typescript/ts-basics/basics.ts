/* 
  Primitives; number, string, boolean
  More complex types: arrays, objects
  Function types, parameters
*/

// Primitives

let age: number;

age = 12;

let userName: string;

userName= "Aleksandar";

let isInstructor: boolean;

isInstructor = true;

// More complex types

// array with strings
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Aca",
  age: 39
}

// person = {
//   isEmployee: true;
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

//course = 12345;

// Union types

let machine: string | number | number[] = "This is Linux";

machine = 23223;

// Type aliases
type Computer = {
  name: string;
  price: number;
}

let computer1: Computer;

computer1 = {
  name: "iMac",
  price: 2000
}

let computers: Computer[];

// Functions and types

function add(a: number, b: number):number {
  return a + b;
}

function printOutput(value: any):void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(['a','b','c'], 'd');

updatedArray[0].split(""); // error
stringArray[0].split("");
