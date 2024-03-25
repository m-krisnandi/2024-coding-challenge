// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Solution 1
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }
  return result;
}

// Solution 2
// function doubleChar(str) {
//   let result = "";
//   for (const element of str) {
//     result += element.repeat(2);
//   }
//   return result;
// }

// Solution 3
// function doubleChar(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i] + str[i];
//   }
//   return result;
// }

// Solution 4
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

// Solution 5
// function doubleChar(str) {
//   return str.replace(/(.)/g, "$1$1");
// }

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("1337")); // "11333377"
