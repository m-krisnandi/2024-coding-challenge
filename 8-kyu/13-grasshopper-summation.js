// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// Solution 1
const summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// Solution 2
// function summation(num) {
//   return (num * (num + 1)) / 2;
// }

// Solution 3
// const summation = (n) => (n * (n + 1)) / 2;

// Solution 4
// const summation = function (num) {
//   return num > 1 ? num + summation(num - 1) : num;
// };

console.log(summation(1)); // 1
console.log(summation(2)); // 3
console.log(summation(8)); // 36
