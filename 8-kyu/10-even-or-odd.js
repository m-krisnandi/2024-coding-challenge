// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// Solution 1
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Solution 2
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// Solution 3

console.log(evenOrOdd(2)); // "Even"
console.log(evenOrOdd(7)); // "Odd"
