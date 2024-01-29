// Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Solution 1
// function smash (words) {
//     return words.join(' ')
// };

// Solution 2
const smash = (words) => words.join(' ')

// Solution 3
// function smash (words) {
//     let smashed = '';
//     for(let i = 0; i < words.length; i++) {
//       smashed += words[i];
//       if(i != words.length - 1) {
//         smashed += ' ';
//       }
//     }
//     return smashed;
// };

console.log(smash(["this", "is", "a", "really", "long", "sentence"]))