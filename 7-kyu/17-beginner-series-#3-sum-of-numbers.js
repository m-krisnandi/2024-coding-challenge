// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Solution 1
function getSum(a, b) {
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// Solution 2
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };

// Solution 3
// function GetSum(a, b) {
//   return ((Math.abs(a - b) + 1) * (a + b)) / 2;
// }

// Solution 4
// function GetSum(a, b) {
//   if (a == b) return a;
//   else if (a < b) return a + GetSum(a + 1, b);
//   else return a + GetSum(a - 1, b);
// }

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
console.log(getSum(5, -1)); // 14
