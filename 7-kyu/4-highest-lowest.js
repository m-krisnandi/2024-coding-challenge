// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// Solution 1
function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let highNumber = arr.sort((a, b) => b - a)[0];
  let lowNumber = arr.sort((a, b) => a - b)[0];
  return `${highNumber} ${lowNumber}`;
}

// Solution 2
// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// Solution 3
// function highAndLow(numbers) {
//   numbers = numbers.split(" ").map(Number);
//   return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
// }

// Solution 4
// function highAndLow(numbers) {
//   var arr = numbers.split(" ").sort(function (a, b) {
//     return a - b;
//   });
//   return arr[arr.length - 1] + " " + arr[0];
// }

// Solution 5
// function highAndLow(numbers) {
//   let arr = numbers.split(" ");
//   let sortNumber = arr.sort((a, b) => a - b); // sort high to low
//   return `${sortNumber[sortNumber.length - 1]} ${sortNumber[0]}`;
// }

// Solution 6
// function highAndLow(numbers) {
//   let numArray = numbers.split(" ");
//   let max = Number(numArray[0]);
//   let min = Number(numArray[0]);
//   let num;
//   for (let i = 1; i < numArray.length; i++) {
//     num = Number(numArray[i]);
//     if (num > max) max = num;
//     if (num < min) min = num;
//   }
//   return max + " " + min;
// }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("1 2 3")); // "3 1"
