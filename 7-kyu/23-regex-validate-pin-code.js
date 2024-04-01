// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// Solution 1
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// Solution 2
// function validatePIN(pin) {
//   let pinlen = pin.length;
//   let isCorrectLength = pinlen == 4 || pinlen == 6;
//   let hasOnlyNumbers = pin.match(/^\d+$/);
//   if (isCorrectLength && hasOnlyNumbers) {
//     return true;
//   }
//   return false;
// }

// Solution 3
// function validatePIN(pin) {
//   let n = pin.length;
//   if (n != 4 && n != 6) return false;
//   for (let i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
//   return true;
// }

// Solution 4
// function validatePIN(pin) {
//   pin = pin.split("");
//   const findNaN = pin.find((character) => !(parseInt(character) >= 0));
//   if ((pin.length === 4 || pin.length === 6) && !findNaN) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution 5
// function validatePIN(pin) {
//   let pinArr = pin
//     .split("")
//     .filter((e, _) =>
//       ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e)
//     );
//   return (
//     (pinArr.length == 4 && pinArr.length == pin.length) ||
//     (pinArr.length == 6 && pinArr.length == pin.length)
//   );
// }

// Solution 6
// function validatePIN(pin) {
//   let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let count = 0;
//   let pinArr = pin.split("");
//   for (let i of pinArr) {
//     if (num.includes(i)) {
//       count += 1;
//     } else {
//       return false;
//     }
//   }
//   return count == 4 || count == 6;
// }

// Solution 7
// function validatePIN(pin) {
//   for (let i of pin) {
//     if (!isFinite(parseInt(i))) return false;
//   }
//   return pin.length === 4 || pin.length === 6;
// }

console.log(validatePIN("a234")); // false
console.log(validatePIN("12345")); // false
console.log(validatePIN("1234")); // true
console.log(validatePIN("123456")); // true
