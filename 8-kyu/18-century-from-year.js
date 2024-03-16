// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// Solution 1 using ceiling method to round up to nearest century (100)
function century(year) {
  return Math.ceil(year / 100);
}

// Solution 2
// function century(year) {
//   let century = 0;
//   for (let i = 0; i < year; i++) {
//     if (i % 100 == 0) {
//       century++;
//     }
//   }
//   return century;
// }

// Solution 3
// function century(year) {
//   if (year <= 100) {
//     return 1;
//   }
//   let cen = parseInt(year / 100);
//   let rem = year % 100;
//   return rem === 0 ? cen : cen + 1;
// }

// Solution 4
// function century(year) {
//   let century = 1;
//   while (year > 100) {
//     year = year - 100;
//     century++;
//   }
//   return century;
// }

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1
