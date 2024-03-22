// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Solution 1
function descendingOrder(n) {
  let string = String(n);
  let arr = string.split("");
  let number = [];
  for (const element of arr) {
    number.push(parseInt(element));
  }
  let desc = number.sort((a, b) => b - a).join('');
  return parseInt(desc);
}

// Solution 2
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// Solution 3
// function descendingOrder(n) {
//   return +(n + "")
//     .split("")
//     .sort(function (a, b) {
//       return b - a;
//     })
//     .join("");
// }

// Solution 4
// function descendingOrder(n) {
//   return +n.toString().split("").sort().reverse().join("");
// }

console.log(descendingOrder(123456789)); // 987654321
console.log(descendingOrder(1021)); // 2110
