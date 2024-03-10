// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// Solution 1
// function removeChar(str) {
//   let result = "";
//   let resultReverse = "";
//   let reverese = "";
//   for (let i = 0; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   reverese = result.split("").reverse().join("");
//   for (let i = 0; i < reverese.length - 1; i++) {
//     resultReverse += reverese[i];
//   }
//   return resultReverse.split("").reverse().join("");
// }

// Solution 2
// function removeChar(str) {
//   return str.slice(1, -1);
// }

// Solution 3
// function removeChar(str) {
//   return str.substring(1, str.length - 1);
// }

// Solution 4
// function removeChar(str) {
//   let str1 = str.split("");
//   str1.shift();
//   str1.pop();
//   return str1.join("");
// }

// Solution 5
function removeChar(str) {
  let input_str = str;
  let output_str = "";
  for (let i = 1; i < input_str.length - 1; i++) {
    output_str += input_str[i];
  }
  return output_str;
}

console.log(removeChar("eloquent")); // 'loquen'
console.log(removeChar("country")); // 'ountr'
