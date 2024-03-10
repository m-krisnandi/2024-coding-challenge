// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Solution 1
// function solution(str) {
//   return str.split("").reverse().join("");
// }

// Solution 2
// function solution(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

// Solution 3
// function solution(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return solution(str.substr(1)) + str.charAt(0);
//   }
// }

// Solution 4
// function solution(str) {
//   return str === "" ? "" : solution(str.substr(1)) + str.charAt(0);
// }

// Solution 5
// const solution = s => [...s].reverse().join('')

// Solution 6
function solution(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString = str[i] + newString; // Prepend character to the beginning
  }
  return newString;
}

console.log(solution("world")); // dlrow
console.log(solution("hello")); // olleh
