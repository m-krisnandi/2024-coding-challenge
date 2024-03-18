// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/555086d53eac039a2a000083

// Solution 1
function lovefunc(flower1, flower2) {
  let result = false;
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  }
  return result;
}

// Solution 2
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }

// Solution 3
// function lovefunc(flower1, flower2) {
//   return (flower1 + flower2) % 2 === 1;
// }

// Solution 4
// function lovefunc(flower1, flower2) {
//   return (flower1 + flower2) % 2 !== 0;
// }

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false
