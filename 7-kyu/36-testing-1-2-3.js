// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Solution 1
var number = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i + 1;
    result.push(index + ": " + array[i]);
  }
  return result;
};

// Solution 2
// var number = function (array) {
//   return array.map(function (line, index) {
//     return index + 1 + ": " + line;
//   });
// };

// Solution 3
// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);

// Solution 4
// function number(arr) {
//   return arr.map((e, i) => `${++i}: ${e}`);
// }

// Solution 5
// var number = function (array) {
//   let newArr = [];
//   array.forEach(function (item, i) {
//     newArr.push(i + 1 + ": " + item);
//   });
//   return newArr;
// };

console.log(number([])); // []
console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]
