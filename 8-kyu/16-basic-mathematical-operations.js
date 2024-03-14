// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Solution 1
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}

// Solution 2 - Do NOT use eval() Executing JavaScript from a string is an BIG security risk.
// function basicOp(operation, value1, value2) {
//   return eval(value1 + operation + value2);
// }

// Solution 3
// function basicOp(operation, value1, value2) {
//   var cases = {
//     "+": value1 + value2,
//     "-": value1 - value2,
//     "*": value1 * value2,
//     "/": value1 / value2,
//   };
//   return cases[operation];
// }

console.log(basicOp("+", 4, 7)); // 11
console.log(basicOp("-", 15, 18)); // -3
console.log(basicOp("*", 5, 5)); // 25
console.log(basicOp("/", 49, 7)); // 7
