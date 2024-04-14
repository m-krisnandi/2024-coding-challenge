// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

// Solution 1
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Solution 2
// function compareNumeric(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
// }
// function sortByLength(array) {
//   let arrayL = array.map((value) => {
//     return value.length;
//   });
//   arrayL = arrayL.sort(compareNumeric);
//   let resArr = arrayL.map((value) => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].length === value) {
//         return array[i];
//       }
//     }
//   });
//   return resArr;
// }

// Solution 3
// function sortByLength(array) {
//   let sorted = [];
//   for (let i = 0; true; i++) {
//     for (let j = 0; j < array.length; j++) {
//       let string = array[j];
//       if (string.length === i) {
//         sorted.push(string);
//       }
//       if (sorted.length === array.length) {
//         return sorted;
//       }
//     }
//   }
// }

console.log(sortByLength(["Beg", "Life", "I", "To"])); // ["I", "To", "Beg", "Life"]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); // ["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Longer", "Longest", "Short"])); // ["Short", "Longer", "Longest"]
