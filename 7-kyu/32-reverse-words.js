// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// Solution 1
function reverseWords(str) {
  let result = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].split("").reverse().join(""));
  }
  return result.join(" ");
}

// Solution 2
// function reverseWords(str) {
//   let result = [];
//   str = str.split(" ");
//   for (const element of str) {
//     result.push(element.split("").reverse().join(""));
//   }
//   return result.join(" ");
// }

// Solution 3
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map(function (word) {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }

// Solution 4
// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// Solution 5
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((str) => str.split("").reverse().join(""))
//     .join(" ");
// }

// Solution 6
// function reverseWords(str) {
//   let reversedWord = "";
//   let reversedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       reversedWord = str[i] + reversedWord;
//     } else {
//       reversedStr += reversedWord + " ";
//       reversedWord = "";
//     }
//   }
//   return reversedStr + reversedWord;
// }

// Solution 7
// const reverseWords = (s) => s.replace(/\S+/g, (v) => [...v].reverse().join``);

// Solution 8
// function reverseWords(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr.split(" ").reverse().join(" ");
// }

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords("apple")); // 'elppa'
