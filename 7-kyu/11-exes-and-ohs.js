// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Solution 1
function XO(str) {
  let word = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "x") {
      countX++;
    } else if (word[i] === "o") {
      countO++;
    }
  }
  return countX === countO;
}

// Solution 2
// function XO(str) {
//   let word = str.toLowerCase();
//   let wordX = word.match(/x/gi);
//   let wordO = word.match(/o/gi);
//   return (wordX && wordX.length) === (wordO && wordO.length);
// }

// Solution 3
// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

// Solution 4
// function XO(str) {
//   var a = str.replace(/x/gi, ""),
//     b = str.replace(/o/gi, "");
//   return a.length === b.length;
// }

// Solution 5
// function XO(str) {
//   var sum = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == "x") sum++;
//     if (str[i].toLowerCase() == "o") sum--;
//   }
//   return sum == 0;
// }

console.log(XO("xo")); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
