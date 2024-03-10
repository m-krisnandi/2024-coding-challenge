// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// Solution 1
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// Solution 2
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// Solution 3
// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

console.log(boolToWord(true)); // Yes
console.log(boolToWord(false)); // No
