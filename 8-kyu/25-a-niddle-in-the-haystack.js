// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

// Solution 1
// function findNeedle(haystack) {
//   let result = "";
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//       result += `found the ${haystack[i]} at position ${[i]}`;
//     }
//   }
//   return result;
// }

// Solution 2
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the ${haystack[i]} at position ${[i]}`;
    }
  }
  return "Your function didn't return anything";
}

// Solution 3
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// Solution 4
// function findNeedle(haystack) {
//   return (
//     "found the needle at position " +
//     haystack.findIndex((item) => item === "needle")
//   );
// }

const haystack_0 = [
  "3",
  "123124234",
  undefined,
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
const haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
const haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
const haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

console.log(findNeedle(haystack_0)); // if (undefined) = "Your function didn't return anything"
console.log(findNeedle(haystack_1)); // 'found the needle at position 3'
console.log(findNeedle(haystack_2)); // 'found the needle at position 5'
console.log(findNeedle(haystack_3)); // 'found the needle at position 30'
