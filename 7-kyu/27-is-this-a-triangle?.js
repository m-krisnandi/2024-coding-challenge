// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/56606694ec01347ce800001b

// Solution 1
function isTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a) {
    return false;
  } else {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    } else {
      return true;
    }
  }
}

// Solution 2
// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && c + b > a;
// }

// Solution 3
// const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

// Solution 4
// function isTriangle(a, b, c) {
//   [a, b, c] = [a, b, c].sort((x, y) => x - y);
//   return a + b > c;
// }

// Solution 5
// function isTriangle(a, b, c) {
//   const sides = [a, b, c].sort();
//   return sides[0] + sides[1] > sides[2];
// }

// Solution 6
// function isTriangle(a, b, c) {
//   let max = Math.max(a, b, c);
//   return a + b + c - max > max;
// }

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(-5, 1, 3)); // false
