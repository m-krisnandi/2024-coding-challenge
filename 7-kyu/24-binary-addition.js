// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/551f37452ff852b7bd000139

// Solution 1
function addBinary(a, b) {
  let sum = a + b;
  let binary = "";
  while (sum > 0) {
    let digit = sum % 2;
    binary = "" + digit + binary;
    sum = parseInt(sum / 2);
  }
  return binary;
}

// Solution 2 - Not work for negative
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// Solution 3 - Best Practice
// let addBinary = (a, b) => {
//   temp = a + b;
//   if (temp < 0) {
//     return (~temp + 1).toString(2);
//   }
//   return temp.toString(2);
// };

// Solution 4
// function addBinary(a, b) {
//   let c = a + b;
//   let res = "";
//   while (c >= 1) {
//     let res = (c % 2) + res;
//     c = Math.floor(c / 2);
//   }
//   return res;
// }

// Solution 5
// function addBinary(a, b) {
//   let sum = a + b,
//     binary = "";
//   while (sum > 0) {
//     binary = (sum % 2) + binary;
//     sum = Math.floor(sum / 2);
//   }
//   return binary;
// }

console.log(addBinary(1, 2)); // "11"
console.log(addBinary(1, 1)); // "10" (1 + 1 = 2 in decimal or 10 in binary)
console.log(addBinary(5, 9)); // "1110" (5 + 9 = 14 in decimal or 1110 in binary)
