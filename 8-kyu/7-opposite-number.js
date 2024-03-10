// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/56dec885c54a926dcd001095

// Solution 1
// function opposite(number) {
//   if (number > 0 || number < 0) {
//     return -number;
//   } else {
//     return number;
//   }
// }

// Solution 2
// function opposite(number) {
//   return -number;
// }

// Solution 3
function opposite(number) {
  return number / -1;
}

console.log(opposite(1)); // -1
console.log(opposite(0)); // 0
console.log(opposite(4.25)); // -4.25
console.log(opposite(-12525220.3325)); // 12525220.3325
