// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/583710ccaa6717322c000105

// Solution 1
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  }
  return number * 9;
}

// Solution 2
// function simpleMultiplication(n) {
//   return n * (n % 2 ? 9 : 8);
// }

// Solution 3
// function simpleMultiplication(n) {
//   return n % 2 == 0 ? n * 8 : n * 9;
// }

// Solution 4
// function simpleMultiplication(number) {
//   if (typeof number === "number") {
//     return number * (8 + (number % 2));
//   } else {
//     console.log(arguments.callee.name + ": Invalid argument");
//   }
// }

console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9
