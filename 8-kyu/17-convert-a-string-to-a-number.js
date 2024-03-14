// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// Solution 1
const stringToNumber = function (str) {
  return parseInt(str);
};

// Solution 2
// const stringToNumber = function (str) {
//   return Number(str);
// };

// Solution 3
// const stringToNumber = function (str) {
//   return +str;
// };

// Solution 4
// const stringToNumber = Number;

console.log(stringToNumber("1234")); // 1234
console.log(stringToNumber("605")); // 605
console.log(stringToNumber("-7")); // -7
