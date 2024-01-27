// Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Solution 1
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i--) {
//         result.push(i);
//     }
//     return result;
// };

// Solution 2
const reverseSeq = n => [...Array(n)].map((el, i) => n - i)

console.log(reverseSeq(5))