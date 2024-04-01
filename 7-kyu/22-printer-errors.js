// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/56541980fa08ab47a0000040

// Solution 1
function printerError(s) {
  let errPrint = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] < "a" || s[i] > "m") {
      errPrint += s[i];
    }
  }
  return `${errPrint.length + "/" + s.length}`;
}

// Solution 2
// function printerError(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count + "/" + s.length;
// }

// Solution 3
// const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// Solution 4
// const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

// Solution 5
// function printerError(s) {
//   let m = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
//       m++;
//     }
//   }
//   return m + "/" + s.length;
// }

// Solution 6
// function printerError(s) {
//   let b = Array.from(s).filter((letter) => letter > "m");
//   return b.length + "/" + s.length;
// }

// Solution 7
// function printerError(s) {
//   let errors = 0;
//   let reg = new RegExp("[^a-m]", "g");
//   while (reg.exec(s) != null) {
//     errors++;
//   }
//   return errors + "/" + s.length;
// }

const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
const s1 = "aaabbbbhaijjjm";
const s2 = "aaaxbbbbyyhwawiwjjjwwm";
console.log(printerError(s)); // "3/56"
console.log(printerError(s1)); // "0/14"
console.log(printerError(s2)); // "8/22"
