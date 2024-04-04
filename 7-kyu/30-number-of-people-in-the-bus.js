// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// Solution 1
// const number = function (busStops) {
//   let firstArr = [];
//   let secondArr = [];
//   for (let i = 0; i < busStops.length; i++) {
//     firstArr.push(busStops[i][0]);
//     secondArr.push(busStops[i][1]);
//   }
//   totalFirstArr = firstArr.reduce((total, num) => total + num, 0);
//   totalSecondArr = secondArr.reduce((total, num) => total + num, 0);
//   return totalFirstArr - totalSecondArr;
// };

// Solution 2
const number = function (busStops) {
  let total = 0;
  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0];
    total -= busStops[i][1];
  }
  return total;
};

// Solution 3
// const number = (busStops) =>
//   busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Solution 4
// const number = function (busStops) {
//   return busStops.map((x) => x[0] - x[1]).reduce((x, y) => x + y);
// };

// Solution 5
// const number = function (busStops) {
//   let num = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     num += busStops[i][0] - busStops[i][1];
//   }
//   return num;
// };

// Solution 6
// const number = function (busStops) {
//   let peopleInBus = 0;
//   busStops.forEach(([enter, left]) => {
//     peopleInBus += enter - left;
//   });
//   return peopleInBus;
// };

// Solution 7
// const number = (busStops) => {
//   const sumOfIndex = (x) =>
//     busStops.map((arr) => arr[x]).reduce((a, b) => a + b, 0);
//   let enter = sumOfIndex(0);
//   let leave = sumOfIndex(1);
//   return enter - leave;
// };

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); // 17
