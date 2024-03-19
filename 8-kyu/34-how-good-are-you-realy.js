// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/5601409514fc93442500010b

// Solution 1
function betterThanAverage(classPoints, yourPoints) {
  let result = false;
  let average = 0;
  for (let i = 0; i < classPoints.length; i++) {
    average += classPoints[i];
  }
  const averagePoint = average / classPoints.length;
  if (yourPoints > averagePoint) {
    result = true;
  }
  return result;
}

// Solution 2
// function betterThanAverage(classPoints, yourPoints) {
//   var classAvg = 0;
//   for (var i = 0; i < classPoints.length; i++) {
//     classAvg += classPoints[i];
//   }
//   classAvg = classAvg / classPoints.length;
//   return yourPoints > classAvg;
// }

// Solution 3
// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
//   );
// }

// Solution 4
// function betterThanAverage(classPoints, yourPoints) {
//   const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
//   const classAverage = classPointsSum / classPoints.length;
//   const isBetter = yourPoints > classAverage;
//   return isBetter;
// }

// Solution 5
// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints >
//     classPoints.reduce(function (sum, x) {
//       return sum + x;
//     }, yourPoints) /
//       (classPoints.length + 1)
//   );
// }

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // false
