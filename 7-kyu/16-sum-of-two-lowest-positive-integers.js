// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Solution 1
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// Solution 2
// function sumTwoSmallestNumbers(numbers) {
//   let [a, b] = numbers.sort((a, b) => a - b);
//   return a + b;
// }

// Solution 3
// function sumTwoSmallestNumbers(numbers) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let secondMin = Number.MAX_SAFE_INTEGER;
//   let n;
//   for (i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//     if (n < min) {
//       secondMin = min;
//       min = n;
//     } else if (n < secondMin) {
//       secondMin = n;
//     }
//   }
//   return min + secondMin;
// }

// Solution 4
// function sumTwoSmallestNumbers(numbers) {
//   let smallestNumber = 0,
//     secondSmallest = 0;
//   smallestNumber = Math.min(numbers[0], numbers[1]);
//   secondSmallest = Math.max(numbers[0], numbers[1]);
//   for (let index = 2; index < numbers.length; index++) {
//     if (numbers[index] < smallestNumber) {
//       secondSmallest = smallestNumber;
//       smallestNumber = numbers[index];
//     } else if (numbers[index] < secondSmallest) {
//       secondSmallest = numbers[index];
//     }
//   }
//   return smallestNumber + secondSmallest;
// }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
