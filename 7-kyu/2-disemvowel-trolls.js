// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/52fba66badcd10859f00097e

// Solution 1
// function disemvowel(str) {
//   return str.replace(/[aiueoAIUEO]/g, "");
// }

// Solution 2
function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

// Solution 3
// function disemvowel(str) {
//   let newStr = "";
//   for (i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i].toLowerCase())) continue;
//     newStr += str[i];
//   }
//   return newStr;
// }

// Solution 4
// const vowels = "aeiou";
// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((letter) => !vowels.includes(letter.toLowerCase()))
//     .join("");
// }

// Solution 5
// const disemvowel = (str) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let newStr = "";
//   for (let i = 0; i <= str.length; i++) {
//     let char = str.charAt(i);
//     if (vowels.indexOf(char) == -1) {
//       newStr += char;
//     }
//   }
//   return newStr;
// };

console.log(disemvowel("This website is for losers LOL!")); //  "Ths wbst s fr lsrs LL!"
