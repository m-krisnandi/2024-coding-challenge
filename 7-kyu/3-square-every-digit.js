// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/546e2562b03326a88e000020

// Solution 1
function squareDigits(num) {
  let number = String(num).split("");
  let squareArr = [];
  for (let i = 0; i < number.length; i++) {
    squareArr.push(number[i] * number[i]);
  }
  return parseInt(squareArr.join(""));
}

// Solution 2
// function squareDigits(num) {
//   return Number(
//     ("" + num)
//       .split("")
//       .map(function (val) {
//         return val * val;
//       })
//       .join("")
//   );
// }

// Solution 3
// function squareDigits(num) {
//   return +num
//     .toString()
//     .split("")
//     .map((i) => i * i)
//     .join("");
// }

// Solution 4
// function squareDigits(num) {
//   //may the code be with you
//   return +(num + "").replace(/\d/g, (matched) => matched * matched);
// }

console.log(squareDigits(3212)); // 9414
