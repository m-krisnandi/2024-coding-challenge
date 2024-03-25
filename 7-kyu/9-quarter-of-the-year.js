// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// Solution 1
const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

// Solution 2
// const quarterOf = (month) => {
//   // Your code here
//   return Math.ceil(month / 3);
// };

// Solution 3
// const quarterOf = (month, quarter = 4) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       quarter = 1;
//       break;
//     case 4:
//     case 5:
//     case 6:
//       quarter = 2;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       quarter = 3;
//       break;
//   }
//   return quarter;
// };

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4
