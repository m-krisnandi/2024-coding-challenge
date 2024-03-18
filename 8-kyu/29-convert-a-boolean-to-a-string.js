// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/551b4501ac0447318f0009cd

// Solution 1
function booleanToString(b) {
  return String(b);
}

// Solution 2
// function booleanToString(b) {
//   return b.toString();
// }

// Solution 3
// function booleanToString(b) {
//   return b ? "true" : "false";
// }

// Solution 4
// function booleanToString(b) {
//   return `${b}`;
// }

// Solution 5
// function booleanToString(b) {
//   return b + "";
// }

// Solution 6
// const booleanToString = String;

console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"
