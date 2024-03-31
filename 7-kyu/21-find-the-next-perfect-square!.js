// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// Solution 1
function findNextSquare(sq) {
  let squareRoot = Math.sqrt(sq);
  if (Number.isInteger(squareRoot)) {
    while (true) {
      sq++;
      if (Number.isInteger(Math.sqrt(sq))) {
        return sq;
      }
    }
  } else {
    return -1;
  }
}

// Solution 2
// function findNextSquare(sq) {
//     // Find the square root of the given number
//     let squareRoot = Math.sqrt(sq);
//     // Check if the square root is an integer
//     if (Number.isInteger(squareRoot)) {
//         // Increment the number until you find the next perfect square
//         while (true) {
//             sq++;
//             if (Number.isInteger(Math.sqrt(sq))) {
//                 return sq;
//             }
//         }
//     } else {
//         // Return -1 if the given number is not a perfect square
//         return -1;
//     }
// }

// Solution 3
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

// Solution 4
// function findNextSquare(sq) {
//   var number = Math.sqrt(sq);
//   if (Math.round(number) === number) {
//     return Math.pow(++number, 2);
//   }
//   return -1;
// }

// Solution 5
// function findNextSquare(sq) {
//   var root = Math.sqrt(sq);
//   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
// }

console.log(findNextSquare(121)); // Output: 144
console.log(findNextSquare(625)); // Output: 676
console.log(findNextSquare(114)); // Output: -1
