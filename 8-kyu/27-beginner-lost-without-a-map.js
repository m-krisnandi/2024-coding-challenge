// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// Solution 1
function maps(x) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}

// Solution 2
// function maps(x) {
//   return x.map((n) => n * 2);
// }

console.log(maps([1, 2, 3])); // [2, 4, 6]
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]
console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]
