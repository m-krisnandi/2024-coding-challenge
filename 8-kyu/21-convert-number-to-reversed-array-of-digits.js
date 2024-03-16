// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Solution 1
function digitize(n) {
  let string = String(n);
  let number = string.split("").reverse();
  return number.map(Number);
}

// Solution 2
// function digitize(n) {
//   return Array.from(String(n), Number).reverse();
// }

// Solution 3
// function digitize(n) {
//   return (n + "").split("").map(Number).reverse();
// }

// Solution 4
// const digitize = (x) => {
//   x = `${x}`.split("").reverse();
//   let a = [];
//   for (let i = 0; i < x.length; i++) {
//     a.push(+x[i]);
//   }
//   return a;
// };

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]
