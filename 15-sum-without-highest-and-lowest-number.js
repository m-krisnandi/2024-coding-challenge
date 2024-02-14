// Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Solution 1
function sumArray(array) {
  if (array) {
    const sorted = array.sort((a, b) => a - b);
    let result = 0;
    for (i = 1; i < sorted.length - 1; i++) {
      result += sorted[i];
    }
    return result;
  } else {
    return 0;
  }
}

// Solution 2
// sumArray = array => array ? array.sort((x, y) => x - y).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0

// Solution 3
// function sumArray(array) {
//   return Array.isArray(array) && array.length > 1
//     ? array.reduce((acc, curr) => acc + curr, 0) -
//         Math.min(...array) -
//         Math.max(...array)
//     : 0;
// }

// Solution 4
// function sumArray(array) {
//   if (array == null || array.length <= 2) {
//     return 0;
//   }
//   var max = Math.max.apply(Math, array);
//   var min = Math.min.apply(Math, array);
//   var sum = 0;
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum - max - min;
// }

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
