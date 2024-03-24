// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// Solution 1
function filter_list(l) {
  // Return a new array with the strings filtered out
  let newArr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") {
      newArr.push(l[i]);
    }
  }
  return newArr;
}

// Solution 2
// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   let newArr = [];
//   for (const element of l) {
//     if (typeof element === "number") {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// Solution 3
// function filter_list(l) {
//   return l.filter(function (v) {
//     return typeof v !== "string";
//   });
// }

// Solution 4
// function filter_list(l) {
//   return l.filter((v) => typeof v !== "string");
// }

// Solution 5
// function filter_list(l) {
//     return l.filter(Number.isInteger)
// }

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // [1,2,123]
