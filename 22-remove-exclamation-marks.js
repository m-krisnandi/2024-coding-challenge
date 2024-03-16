// Coding Challenge 2024
// 22/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Solution 1
function removeExclamationMarks(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      result += s[i];
    }
  }
  return result;
}

// Solution 2
// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }

// Solution 3
// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }

// Solution 4
// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }

console.log(removeExclamationMarks("Hello World!")); // "Hello World"
