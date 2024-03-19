// Coding Challenge 2024
// 23/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// Solution 1
function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// Solution 2
// function monkeyCount(n) {
//   return Array.from({ length: n }, (_, i) => i + 1);
// }

// Solution 3
// function monkeyCount(n) {
//   for (var i = 0, arr = []; i < n; arr.push(++i));
//   return arr;
// }

// Solution 4
// function monkeyCount(n) {
//   return [...Array(n).keys()].map((a) => a + 1);
// }

// Solution 5
// function monkeyCount(n) {
//   return [...Array(n + 1).keys()].slice(1);
// }

console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
