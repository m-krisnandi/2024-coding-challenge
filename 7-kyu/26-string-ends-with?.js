// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// Solution 1
function solution(str, ending) {
  if (typeof str === "string" && typeof ending === "string") {
    return str.endsWith(ending);
  }
  return false;
}

// Solution 2
// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// Solution 3
// function solution(str, ending) {
//   return str.substr(-ending.length) == ending;
// }

// Solution 4
// function solution(str, ending) {
//   return str.slice(0 - ending.length) === ending;
// }

// Solution 5
// function solution(str, ending) {
//   let strArray = str.split("");
//   let endArray = ending.split("");
//   let wasteArrayLength = strArray.length - endArray.length;
//   let newArray = [];
//   for (let i = wasteArrayLength; i < strArray.length; i++) {
//     newArray.push(strArray[i]);
//   }
//   let newEnding = endArray.join();
//   let newString = newArray.join();
//   if (newString == newEnding) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 6
// function solution(str, ending) {
//   return (
//     str
//       .split("")
//       .reverse()
//       .join("")
//       .search(ending.split("").reverse().join("")) === 0
//   );
// }

// Solution 7
// function solution(str, ending) {
//   return str.lastIndexOf(ending) === str.length - ending.length &&
//     str.lastIndexOf(ending) !== -1
//     ? true
//     : false;
// }

// Solution 8
// function solution(str, ending) {
//   let split_str = str.split("");
//   let integerEnding = ending.length;
//   let reversedArr = reverse(split_str);
//   let reversedEnding = reverse(ending.split(""));
//   let checker = true;
//   for (let i = 0; i < integerEnding; i++) {
//     if (reversedArr[i] != reversedEnding[i]) {
//       checker = false;
//     }
//   }
//   return checker;
//   function reverse(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//       let oldElement = arr[i];
//       let previousIndex = arr.length - 1 - i;
//       arr[i] = arr[previousIndex];
//       arr[previousIndex] = oldElement;
//     }
//     return arr;
//   }
// }

// Solution 9
// function solution(str, ending) {
//   let word = str.split("").reverse().join("");
//   let end = ending.split("").reverse().join("");
//   for (let i = 0; i < end.length; i++) {
//     if (word[i] != end[i]) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
console.log(solution("abcdefg", "efg")); // true
