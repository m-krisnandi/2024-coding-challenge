// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/54edbc7200b811e956000556

// Solution 1
function countSheeps(sheep) {
  let result = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      result++;
    }
  }
  return result;
}

// Solution 2
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// Solution 3
// function countSheeps(arrayOfSheep) {
//   var count = 0;
//   arrayOfSheep.forEach(function (sheep) {
//     if (sheep) count++;
//   });
//   return count;
// }

// Solution 4
// function countSheeps(arrayOfSheep) {
//   var array = arrayOfSheep.reduce((a, b) => a + (b === true ? 1 : 0), 0);
//   return array;
// }

console.log(countSheeps([])); // 0
console.log(countSheeps([undefined])); // 0
console.log(countSheeps([null])); // 0
console.log(countSheeps([false])); // 0
console.log(countSheeps([true])); // 1
console.log(countSheeps([undefined, null, false, true])); // 1
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // 2
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // 17
