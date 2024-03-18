// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

// Solution 1
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}

// Solution 2
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0;
// }

// Solution 3
// function paperwork(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }

// Solution 4
// const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);

console.log(paperwork(5, 5)); // 25
console.log(paperwork(5, -5)); // 0
console.log(paperwork(-5, -5)); // 0
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, 0)); // 0
