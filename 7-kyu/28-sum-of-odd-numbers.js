// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

// Solution 1
function rowSumOddNumbers(n) {
  return n * n * n;
}

// Solution 2
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// Solution 3
// function rowSumOddNumbers(n) {
//   /* The rows' start numbers are Hogben's centered polygonal numbers:
//      1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
//      <https://oeis.org/A002061>

//      The sum of one row is given by:
//      s[n] = n^2 + n(b[n] - 1).
//      <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>

//      Inline b[n]:
//      s[n] = n^2 + n(n^2 - n + 1 - 1)
//           = n^2 + n(n^2 - n)
//           = n^2 + n^3 - n^2
//           = n^3
//      ... oh. */
//   return n * n * n;
// }

// Solution 4
// let rowSumOddNumbers = (n) => n ** 3;

// Solution 5
// function rowSumOddNumbers(n) {
//   if (n > 0) {
//     return n * n * n;
//   } else {
//     return 0; // atau pesan kesalahan seperti "Invalid Input"
//   }
// }

// Solution 6
// function rowSumOddNumbers(n) {
//   const out = Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1);
//   return out.slice(out.length - n).reduce((a, b) => a + b, 0);
// }

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(42)); // 74008
