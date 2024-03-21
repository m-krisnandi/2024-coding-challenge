// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// Solution 1
function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}

// Solution 2
// function reverseWords(str) {
//   let arr = [];
//   let temp = "";
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === " " || !str[i]) {
//       arr.push(temp);
//       temp = "";
//     } else {
//       temp += str[i];
//     }
//   }

//   let output = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i === 0) {
//       output += arr[i];
//     } else {
//       output += `${arr[i]} `;
//     }
//   }
//   return output;
// }

console.log(reverseWords("hello world!")); // "world! hello"
