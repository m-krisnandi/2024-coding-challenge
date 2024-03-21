// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57a429e253ba3381850000fb

// Solution 1
function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

// Solution 2
// function bmi(weight, height) {
//   var result = weight / Math.pow(height, 2);
//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// Solution 3
// const bmi = (w, h, bmi = w / h / h) =>
//   bmi <= 18.5
//     ? "Underweight"
//     : bmi <= 25
//     ? "Normal"
//     : bmi <= 30
//     ? "Overweight"
//     : "Obese";

// Solution 4
// function bmi(weight, height) {
//   const formula = weight / Math.pow(height, 2);
//   switch (true) {
//     case formula <= 18.5:
//       return "Underweight";
//     case formula <= 25.0:
//       return "Normal";
//     case formula <= 30:
//       return "Overweight";
//     case formula > 30:
//       return "Obese";
//   }
// }

console.log(bmi(80, 1.8)); // "Normal"
