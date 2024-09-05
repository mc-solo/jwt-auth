// // Arrow functions
// const add = (a, b) => a + b;
// console.log(add(7, 4));

// // Template literals
// const firstName = "Alice";
// console.log(`Hello, ${firstName}`);

// // Destructuring assignment
// const [x, y] = [6, 7];
// console.log(y);

// Default parameters
// if there are no default parameters, this is how you handle defult args for function prarameters
// const greet = (user) => {
//   const userName = user !== undefined ? user : "Guest";
//   return `Hello, ${userName}`;
// };
// console.log(greet());

// // however with defult parameters, it's pretty much simple
// const greetPerson = (user = "Wondwosen") => console.log(`Hello, ${user}`);
// greetPerson();

// Working with the spread and rest ops
// the ... operator

//copies array one to sec Array
// const myArray = [1, 4, 7];
// const secArray = [...myArray, 10, 13];
// console.log(secArray);

// another use is to copy the properties of objs from one to the other
// const obj1 = {
//   name: "Wondwosen Asegid",
//   age: 21,
// };

// const obj2 = {
//   ...obj1,
//   profession: "Backend engineer",
// };

// console.log(obj2);

// another use of the ... operator is to merge objs

// const obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

// the rest operator
// it's the exact opposite of the spread operator
// used to collect multiple elements into a single entity

// usage: 1. handling variable number of args to a function
//        2. destructuring an array
//        3. combining rest operators with other parameters

// counting the total number of arguments that are passed to a function, and logging all the args
const logAllArgs = (...args) => {
  console.log(args);
  console.log(args.length);
};
logAllArgs("Wondwosen", 21, "Software Developer");

// destructuring arays with the rest operator

const colors = ["red", "blue", "green", "yellow"];
const [primary, secondary, ...otherColors] = colors;

console.log(primary);
