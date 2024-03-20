// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// Solution 1
// function invert(array) {
//   const result = [];
//   // Menggunakan loop untuk iterasi melalui array input
//   for (let i = 0; i < array.length; i++) {
//     // Jika nilai negatif, tambahkan ke hasil dengan nilai positif
//     if (array[i] < 0) {
//       result.push(-array[i]);
//     }
//     // Jika nilai positif atau 0, tambahkan ke hasil dengan nilai negatif
//     else {
//       result.push(array[i] === 0 ? 0 : -array[i]);
//     }
//   }
//   return result;
// }

// Solution 2
// const invert = (array) => array.map((num) => -num);

// Solution 3
// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// Solution 4
const invert = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] === 0 ? 0 : -array[i]);
  }
  return result;
};

console.log(invert([1, 2, 3, 4, 5])); // [-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
console.log(invert([0])); // [0]
