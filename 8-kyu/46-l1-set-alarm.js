// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// Solution 1
function setAlarm(employed, vacation) {
  if (employed === true && vacation === true) {
    return false;
  } else if (employed === true && vacation === false) {
    return true;
  } else if (employed === false && vacation === true) {
    return false;
  } else if (employed === false && vacation === false) {
    return false;
  }
}

// Solution 2
// const setAlarm = (employed, vacation) => employed && !vacation;

// Solution 3
// function setAlarm(employed, vacation) {
//   return employed > vacation;
// }

// Solution 4
// function setAlarm(employed, vacation) {
//   // employed is a boolean (true/false)
//   // vacation is a boolean (true/false)
//   // if you are employed and not on vacation
//   if (employed && !vacation) {
//     //   The function should return true if you are employed and not on vacation :  need to set an alarm
//     return true;
//   } else {
//     //   It should return false otherwise
//     return false;
//   }
// }

console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true
