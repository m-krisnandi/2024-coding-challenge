// Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Solution 1
// function getGrade(s1, s2, s3) {
//   const average = (s1 + s2 + s3) / 3;
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// Solution 2
const getGrade = (...scores) => {
  let average = scores.reduce((acc, curr) => acc + curr) / scores.length;
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
};

// Solution 3
// function getGrade(s1, s2, s3) {
//   let avg = (s1 + s2 + s3) / 3;
//   switch (true) {
//     case avg >= 90:
//       return "A";
//     case avg >= 80:
//       return "B";
//     case avg >= 70:
//       return "C";
//     case avg >= 60:
//       return "D";
//     default:
//       return "F";
//   }
// }

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
console.log(getGrade(70, 70, 70));
console.log(getGrade(65, 70, 59));
console.log(getGrade(44, 55, 52));
