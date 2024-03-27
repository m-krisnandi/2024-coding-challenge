// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

// Solution 1
const isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  for (let i = 0; i <= n; i++) {
    if (i ** 2 === n) {
      return true;
    }
  }
  return false;
};

// Solution 2
// const isSquare = function (n) {
//   return Math.sqrt(n) % 1 === 0;
// };

// Solution 3
// const isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// };

// Solution 4
// const isSquare = function(n){
//   return /^[0-9]+$/.test(Math.sqrt(n))
// }

console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
