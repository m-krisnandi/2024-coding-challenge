// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/555eded1ad94b00403000071

// Solution 1
function SeriesSum(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += 1 / (1 + i * 3);
  }
  return result.toFixed(2);
}

// Solution 2
// function SeriesSum(n, s = 0) {
//   return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
// }

// Solution 3
// function SeriesSum(n) {
//   return Array(n)
//     .fill(0)
//     .map((e, i) => 3 * i + 1)
//     .reduce((s, e) => s + 1 / e, 0)
//     .toFixed(2);
// }

// Solution 4
// function SeriesSum(n) {
//   let s = 0;
//   while (n) {
//     s += 1 / (1 + 3 * --n);
//   }
//   return s.toFixed(2);
// }

// Solution 5
// SeriesSum = (n) =>
//   Array.from(Array(n), (e, i) => 1 / (i * 3 + 1))
//     .reduce((s, e) => s + e, 0)
//     .toFixed(2);

// Solution 6
// const { range } = require("lodash");
// const reducer = (a, i) => a + 1 / (1 + i * 3);
// const SeriesSum = (n) => range(n).reduce(reducer, 0).toFixed(2);

// Solution 7
// const SeriesSum = (n, acc = 0) => {
//   if (n === 0) return acc.toFixed(2);
//   else return SeriesSum(n - 1, acc + 1 / (3 * n - 2));
// };

// Solution 8
// const SeriesSum = (n) =>
//   [...Array(n)].reduce((pre, _, idx) => pre + 1 / (3 * idx + 1), 0).toFixed(2);

console.log(SeriesSum(2)); // "1.25", "n = 2"
console.log(SeriesSum(3)); // "1.39", "n = 3"
console.log(SeriesSum(4)); // "1.49", "n = 4"
