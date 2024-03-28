// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// Solution 1
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Solution 2
// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function (match) {
//     return match.toUpperCase();
//   });
// };

// Solution 3
// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((item) => item[0].toUpperCase() + item.slice(1))
//     .join(" ");
// };

// Solution 4
// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((i) => i.replace(i[0], i[0].toUpperCase()))
//     .join(" ");
// };

// Solution 5
// String.prototype.toJadenCase = function () {
//   let words = this.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }
//   return words
// };

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
