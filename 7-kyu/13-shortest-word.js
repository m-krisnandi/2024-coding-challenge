// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Solution 1
function findShort(s) {
  return s
    .split(" ")
    .reduce((acc, curr) => (curr.length < acc.length ? curr : acc)).length;
}

// Solution 2
// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }

// Solution 3
// function findShort(s) {
//   return Math.min.apply(
//     null,
//     s.split(" ").map((w) => w.length)
//   );
// }

// Solution 4
// function findShort(s) {
//   let arr = s.split(" ");
//   let smallest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < smallest.length) {
//       smallest = arr[i];
//     }
//   }
//   return smallest.length;
// }

// Solution 5
// const findShort = (s) =>
//   s
//     .split(" ")
//     .sort((a, b) => b.length - a.length)
//     .pop().length;

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
