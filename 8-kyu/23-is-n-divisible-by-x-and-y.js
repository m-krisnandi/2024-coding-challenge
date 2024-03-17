// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5545f109004975ea66000086

// Solution 1
function isDivisible(n, x, y) {
  let result = false;
  if (n % x == 0 && n % y == 0) {
    result = true;
  }
  return result;
}

// Solution 2
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

// Solution 3
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0 ? true : false;
// }

// Solution 4
// const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

// Solution 5
// function isDivisible(n, ...dividers) {
//   return dividers.every((divider) => n % divider == 0);
// }

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true
