// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// Solution 1
function longest(s1, s2) {
  let exists = new Map();
  let letters = s1 + s2;
  let arrLetters = letters.split("").sort();
  let result = "";
  for (let i = 0; i < arrLetters.length; i++) {
    if (!exists.has(arrLetters[i])) {
      result += arrLetters[i];
      exists.set(arrLetters[i], 1);
    }
  }
  return result;
}

// Solution 2
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// Solution 3
// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2))
//     .sort()
//     .join("");
// }

// Solution 4
// function longest(s1, s2) {
//   s3 = s1 + s2;
//   s4 = s3.split("");
//   s4 = s4.sort().filter(function (element, index, array) {
//     return element !== array[index - 1];
//   });
//   return s4.join("");
// }

// Solution 5
// function longest(s1, s2) {
//   let output = [];
//   let combi = s1.concat(s2);
//   let array = combi.split("").sort();
//   for (let i = 0; i <= array.length; i++) {
//     console.log(array[i]); //test
//     if (!output.includes(array[i])) {
//       output.push(array[i]);
//     }
//   }
//   return output.join("");
// }

// Solution 6
// function longest(s1, s2) {
//   return (s1 + s2)
//     .split("")
//     .sort()
//     .join("")
//     .replace(/(.)\1+/g, "$1");
// }

// Solution 7
// const longest = (s1, s2) =>
//   s1
//     .concat(s2)
//     .split("")
//     .sort()
//     .filter((item, pos, self) => self.indexOf(item) == pos)
//     .join("");

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
