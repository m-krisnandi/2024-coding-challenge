// Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// Solution 1
// function greet(name, owner) {
//   if (name === owner) {
//     return "Hello boss";
//   } else {
//     return "Hello guest";
//   }
// }

// Solution 2
const greet = (name, owner) => (name === owner) ? "Hello boss" : "Hello guest";

// Solution 3
// function greet(name, owner) {
//   return `Hello ${name == owner ? "boss" : "guest"}`;
// }

console.log(greet("Daniel", "Daniel")); // Hello boss
console.log(greet("Greg", "Daniel")); // Hello guest
