// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/534ea96ebb17181947000ada

// Solution 1
function breakChocolate(n, m) {
  let result = n * m - 1;
  if (result < 0) {
    return 0;
  }
  return result;
}

// Solution 2
// const breakChocolate = function (n, m) {
//   return n * m === 0 ? 0 : n * m - 1;
// };

// Solution 3
// const breakChocolate = function (n, m) {
//   if (n === 0 || m === 0) return 0;
//   return n * m - 1;
// };

// Solution 4
// const breakChocolate = function (n, m) {
//   return Math.max(0, m * n - 1);
// };

console.log(breakChocolate(5, 5)); // 24
console.log(breakChocolate(1, 1)); // 0
