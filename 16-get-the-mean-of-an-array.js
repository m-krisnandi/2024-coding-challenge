// Coding Challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// Solution 1
// function getAverage(marks) {
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

// Solution 2
// function getAverage(marks) {
//   let total = 0;
//   for (const element of marks) {
//     total += element;
//   }
//   return Math.floor(total / marks.length);
// }

// Solution 3
function getAverage(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}

// Solution 4
// const getAverage = (marks) =>
//   Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

console.log(getAverage([1, 2, 3, 4, 5])); // 3
