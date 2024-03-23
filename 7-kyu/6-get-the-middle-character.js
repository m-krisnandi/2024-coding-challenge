// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/56747fd5cb988479af000028

// Solution 1
function getMiddle(s) {
  let middle = "";
  if (s.length % 2 === 1) {
    middle = [s[(s.length / 2) | 0]];
  } else {
    middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
  }
  return middle.join("");
}

// Solution 2
// const getMiddle = (s) => {
//   let middle = "";
//   if (s.length % 2 === 1) middle = [s[(s.length / 2) | 0]];
//   else middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
//   return middle.join("");
// };

// Solution 3
// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// Solution 4
// function getMiddle(s) {
//   var middle = s.length / 2;
//   return s.length % 2
//     ? s.charAt(Math.floor(middle))
//     : s.slice(middle - 1, middle + 1);
// }

// Solution 5
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// Solution 6
// function getMiddle(s) {
//   let middle = Math.floor(s.length / 2);
//   return s.length % 2 === 0
//     ? s.slice(middle - 1, middle + 1)
//     : s.slice(middle, middle + 1);
// }

// Solution 7
// function getMiddle(string) {
//   var middleIndex = string.length / 2;
//   if (string.length % 2 == 0) {
//     return string.slice(middleIndex - 1, middleIndex + 1);
//   } else {
//     return string.charAt(middleIndex);
//   }
// }

// Solution 8
// function getMiddle(s) {
//   return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
// }

// Solution 9
// 00 (0, bit zeroes pad integers until they fill the maximum number of bits)
// 11 (3, 2**1 * 1 + 2**0 * 1)
// && (think of this as a column-wise && where 1 is true and 0 is false)
// 01 (1, 2**1 * 0 + 2**0 + 1)
// 01 (1)

// 10 (2, 2**1 * 1 + 2**0 * 0)
// &&
// 01 (1, 2**1 * 0 + 2**0 * 1)
// 00 (0)
// const getMiddle = (s) => s.substr((s.length - 1) >>> 1, (~s.length & 1) + 1);

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"
