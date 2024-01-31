// Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Solution 1
// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i)
//     }
//     return z;
// }

// Solution 2
const countBy = (x, n) => [...Array(n)].map((_, i) => ++i * x)

// Solution 3
// const countBy = (x, n) => Array.from({length: n}, (_, k) => (k + 1) * x)

console.log(countBy(2,5))