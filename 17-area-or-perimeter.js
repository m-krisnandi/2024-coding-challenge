// Coding Challenge 2024
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// Solution 1
// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w;
//   } else {
//     return 2 * (l + w);
//   }
// };

// Solution 2
// const areaOrPerimeter = (l, w) => (l === w) ? l * w : 2 * (l + w);

// Solution 3
const areaOrPerimeter = function (l, w) {
  const area = l * w;
  const perimeter = (l + w) * 2;

  return l === w ? area : perimeter;
};

console.log(areaOrPerimeter(3, 3)); // 9
console.log(areaOrPerimeter(6, 10)); // 32
