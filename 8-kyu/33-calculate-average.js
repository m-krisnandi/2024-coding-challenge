// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

// Solution 1
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}

// Solution 2
// const findAverage = (array) => {
//   return array.length === 0
//     ? 0
//     : array.reduce((acc, ind) => acc + ind, 0) / array.length;
// };

// Solution 3
// const findAverage = (array) =>
//   array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

// Solution 4
// function findAverage(array) {
//   if (array.length == 0) return 0;
//   let result = 0;
//   for (num of array) {
//     result += num;
//   }
//   return result / array.length;
// }

console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([59, 67, 17, 72, 13, 69])); // 49.5
