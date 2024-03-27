// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Solution 1
function isIsogram(str) {
  let word = str.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.substring(i + 1).includes(word.charAt(i))) {
      return false;
    }
  }
  return true;
}

// Solution 2
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// Solution 3
// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }

// Solution 4
// function isIsogram(str) {
//   let i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; ++i)
//     for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
//   return true;
// }

// Solution 5
// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// Solution 6
// function isIsogram(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str.charAt(i), i + 1) >= 0) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("")); // true
