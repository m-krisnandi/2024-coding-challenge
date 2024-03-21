// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

// Solution 1
function makeUpperCase(str) {
  return str.toUpperCase();
}

// Solution 2
// function makeUpperCase(str) {
//   return str.toLocaleUpperCase();
// }

// Solution 3
// function makeUpperCase(str) {
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str[i].charCodeAt(0);
//     const chr =
//       charCode >= 97 && charCode <= 122
//         ? String.fromCharCode(charCode - 32)
//         : str[i];
//     output += chr;
//   }
//   return output;
// }

// Solution 4
// const makeUpperCase = Function.prototype.call.bind(
//   String.prototype.toUpperCase
// );

console.log(makeUpperCase("")); // ""
console.log(makeUpperCase("hello")); // "HELLO"
