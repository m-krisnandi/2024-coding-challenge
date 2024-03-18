// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Solution 1
// function past(h, m, s) {
//   return (h * 60 * 60 + m * 60 + s) * 1000;
// }

// Solution 2
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// Solution 3
// function past(h, m, s) {
//   var hours = h * 60 * 60 * 1000;
//   var minutes = m * 60 * 1000;
//   var seconds = s * 1000;

//   return hours + minutes + seconds;
// }

// Solution 4
// function past(h, m, s) {
//   const setTime = new Date().setHours(h, m, s);
//   const midnight = new Date().setHours(0, 0, 0);

//   return Math.round(setTime - midnight);
// }

// Solution 5
// function past(h, m, s) {
//   var miliseconds = 0;
//   miliseconds = miliseconds + s * 1000;
//   miliseconds = miliseconds + m * 60000;
//   miliseconds = miliseconds + h * 3600000;
//   return miliseconds;
// }

console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
console.log(past(0, 0, 0)); // 0
