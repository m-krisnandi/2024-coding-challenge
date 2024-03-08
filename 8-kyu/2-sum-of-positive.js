// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Solution 1
// function positiveSum(arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   let x = arr.length;
//   for (x; x--; ) {
//     if (arr[x] < 0) {
//       arr.pop();
//     }
//   }
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// Solution 2
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {
//     // setup loop to go through array of given length
//     if (arr[i] > 0) {
//       // if arr[i] is greater than zero
//       total += arr[i]; // add arr[i] to total
//     }
//   }
//   return total; // return total
// }

// Solution 3
// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

// Solution 4
// function positiveSum(arr) {
//   return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
// }

// Solution 5
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Solution 6
// function positiveSum(obj) {
//   return obj.map((el) => (el < 0 ? 0 : el)).reduce((acc, i) => acc + i, 0);
// }

console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
