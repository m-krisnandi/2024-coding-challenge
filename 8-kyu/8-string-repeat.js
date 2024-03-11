// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Solution 1
// function repeatStr(n, s) {
//   return s.repeat(n)
// }

// Solution 2
// function repeatStr(n, s) {
//   let repeatString = "";
//   while (n > 0) {
//     repeatString += s;
//     n--;
//   }
//   return repeatString;
// }

// Solution 3
// function repeatStr(num, str) {
//     let res = ''
//     for (let i = 1; i <= num; i++) {
//         res += str
//     }
//     return res
// }

// Solution 4
function repeatStr(string, times) {
  if (times < 0) {
    return "";
  } else if (times === 0) {
    // Add a base case for 0 repetitions
    return "";
  } else if (times === 1) {
    return string;
  } else {
    return string + repeatStr(string, times - 1);
  }
}

console.log(repeatStr(3, "*")); // "***"
console.log(repeatStr(5, "#")); // "####"
console.log(repeatStr(2, "ha ")); // "ha ha"
