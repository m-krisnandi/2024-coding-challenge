// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5813d19765d81c592200001a

// Solution 1
function dontGiveMeFive(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      result.push(i);
    }
  }
  return result.length;
}

// Solution 2
// function dontGiveMeFive(start, end) {
//   let count = 0;
//   for (let i = start; i <= end; i++) {
//     if (!/5/.test(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// Solution 3
// function dontGiveMeFive(start, end) {
//   let res = [];
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes("5")) res.push(i);
//   }
//   return res.length;
// }

// Solution 4
// function dontGiveMeFive(start, end) {
//   let count = 0;
//   for (let i = start; i <= end; ++i) if (!i.toString().includes("5")) count++;
//   return count;
// }

// Solution 5
// function dontGiveMeFive(start, end) {
//   return Array.from(Array(end - start + 1), (e, i) => i + start).filter(
//     (e) => ("" + e).indexOf("5") === -1
//   ).length;
// }

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
console.log(dontGiveMeFive(1, 9)); // 8
console.log(dontGiveMeFive(4, 17)); // 12
