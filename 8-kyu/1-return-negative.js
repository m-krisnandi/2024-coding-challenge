// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// Solution 1
// function makeNegative(num) {
//   if (num <= 0) {
//     return num;
//   } else if (num > 0) {
//     return num * -1;
//   }
// }

// Solution 2
// function makeNegative(num) {
//   return -Math.abs(num);
// }

// Solution 3
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

// Solution 4
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(42)); // -42
console.log(makeNegative(1)); // -1
console.log(makeNegative(-5)); // -5
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.12)); // -0.12
