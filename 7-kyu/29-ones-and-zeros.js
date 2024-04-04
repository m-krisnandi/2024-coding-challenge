// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// Solution 1
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2)
};

// Solution 2
// Operation         Accumulator    Remaining Array
// =========         ===========    ===============
// none              1              [0, 1, 0, 1, 0]
// 1 << 1 | 0        10             [1, 0, 1, 0]
// 10 << 1 | 1       101            [0, 1, 0]
// 101 << 1 | 0      1010           [1, 0]
// 1010 << 1 | 1     10101          [0]
// 10101 << 1 | 0    101010         []
// function binaryArrayToNumber(arr) {
//   return arr.reduce((a, b) => (a << 1) | b);
// }

// Solution 3
// const binaryArrayToNumber = (arr) => {
//   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
// };

// Solution 4
// const binaryArrayToNumber = (arr) => {
//   // your code
//   //array recieved as argument
//   //reverse array to begin at first digit
//   //loop through array
//   //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
//   //add numbers to variable | return variable
//   arr.reverse();
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count += Math.pow(2, i);
//     }
//   }
//   return count;
// };

// Solution 5
// const binaryArrayToNumber = (arr) => {
//   let num = 0;
//   for (let i = 0, exponent = 3; i < arr.length; i++) {
//     if (arr[i]) {
//       num += Math.pow(2, exponent);
//     }
//     exponent--;
//   }
//   return num;
// };

// Solution 6
// const binaryArrayToNumber = (arr) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[arr.length - i - 1] == 1) {
//       result += Math.pow(2, i);
//     }
//   }
//   return result;
// };

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
