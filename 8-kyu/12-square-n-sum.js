// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/515e271a311df0350d00000f

// Solution 1
function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += Math.pow(numbers[i], 2);
  }
  return result;
}

// Solution 2
// function squareSum(numbers) {
//   return numbers.reduce(function (sum, n) {
//     return n * n + sum;
//   }, 0);
// }

// Solution 3
// function squareSum(numbers) {
//   return numbers.reduce((sum, num) => sum + num * num, 0);
// }

// Solution 4
// function squareSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (n) {
//     sum += n * n;
//   });
//   return sum;
// }

// Solution 5
// function squareSum(numbers) {
//   var result = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     result += numbers[i] * numbers[i];
//   }
//   return result;
// }

// For example, for [1, 2, 2] it should return 9 because 1 2 + 2 2 + 2 2 = 9 1 2 +2 2 +2 2 =9.
console.log(squareSum([1, 2, 2])); // 9
console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
