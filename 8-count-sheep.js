// Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// Solution 1
// const countSheep = function (num){
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         result += `${i} sheep...`
//     }
//     return result;
// }

// Solution 2
// const countSheep = (length) => Array.from({length}, (_, i) => `${++i} sheep...`).join('')

// Solution 3
const countSheep = (num) => [...Array(num)].map((_, i) => `${i+1} sheep...`).join('')

console.log(countSheep(3))