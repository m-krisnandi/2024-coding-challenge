// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/559590633066759614000063

// Solution 1
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Solution 2
// function minMax(arr) {
//   let a = arr.sort(function (a, b) {
//     return a - b;
//   });
//   return [a[0], a[a.length - 1]];
// }

// Solution 3
// function minMax(prices) {
//   let min = prices[0],
//     max = min;
//   for (let price of prices) {
//     if (price < min) min = price;
//     else if (price > max) max = price;
//   }
//   return [min, max];
// }

// Solution 4
// function minMax(arr) {
//   let max = arr[0],
//     min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return [min, max];
// }

// Solution 5 - Better than solution 1
// function minMax(arr) {
//   let max = arr[0],
//     min = arr[0];
//   for (const element of arr) {
//     if (element > max) max = element;
//     if (element < min) min = element;
//   }
//   return [min, max];
// }

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334454]
console.log(minMax([5])); // [5, 5]
