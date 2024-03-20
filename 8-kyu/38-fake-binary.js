// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57eae65a4321032ce000002d

// Solution 1
function fakeBin(x) {
  let newArr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newArr += 0;
    } else if (x[i] >= 5) {
      newArr += 1;
    }
  }
  return newArr;
}

// Solution 2
// function fakeBin(x) {
//   return x
//     .split("")
//     .map((n) => (n < 5 ? 0 : 1))
//     .join("");
// }

// Solution 3
// function fakeBin(x) {
//   return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
// }

// Solution 4
// function fakeBin(x) {
//   return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
// }

// Solution 5
// function fakeBin(x) {
//   let result = "";
//   for (let i = 0; i < x.length; i++) {
//     x[i] < 5 ? (result += 0) : (result += 1);
//   }
//   return result;
// }

// Solution 6
// function fakeBin(x) {
//   return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
// }

console.log(fakeBin("45385593107843568")); // '01011110001100111'
console.log(fakeBin("509321967506747")); // '101000111101101'
console.log(fakeBin("366058562030849490134388085")); // '011011110000101010000011011'
