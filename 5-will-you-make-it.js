// Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// Solution 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
// };

// Solution 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft

// Solution 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump

// Solution 4
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (mpg * fuelLeft >= distanceToPump) {
//       return true;
//     } else {
//       return false;
//     }
// };

console.log(zeroFuel(50, 25, 2))