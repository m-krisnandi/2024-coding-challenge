// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Solution 1
function getCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "i" ||
      str[i] === "u" ||
      str[i] === "e" ||
      str[i] === "o"
    ) {
      count++;
    }
  }
  return count;
}

// Solution 2
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// Solution 3
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount++;
//       }
//     }
//   }
//   return vowelsCount;
// }

// Solution 4
// function getCount(str) {
//   return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }

// Solution 5
// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, "").length;
// }

// Solution 6
// function getCount(str) {
//   var vowelsCount = 0;
//   for (index in str) {
//     switch (str[index]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         vowelsCount++;
//         break;
//     }
//   }
//   return vowelsCount;
// }

console.log(getCount("abracadabra")); // 5
