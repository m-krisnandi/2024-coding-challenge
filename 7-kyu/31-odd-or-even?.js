// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5949481f86420f59480000e7

// Solution 1
function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum % 2 === 0 || array.length === 0 ? "even" : "odd";
}

// Solution 2
// function oddOrEven(arr) {
//   return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }

// Solution 3
// function oddOrEven(array) {
//   return array.filter((number) => number & 1).length & 1 ? "odd" : "even";
// }

console.log(oddOrEven([0])); // "even"
console.log(oddOrEven([1])); // 'odd'
console.log(oddOrEven([])); // 'even'
