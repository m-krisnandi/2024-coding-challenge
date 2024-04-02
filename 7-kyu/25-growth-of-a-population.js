// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

// Solution 1
function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;
  while (population < p) {
    population += Math.floor((population * percent) / 100) + aug;
    years++;
  }
  return years;
}

// Solution 2
// function nbYear(p0, percent, aug, p) {
//   let population = p0;
//   let years = 0;
//   for (years; population < p; years++) {
//     population = Math.floor(population + (population * percent) / 100 + aug);
//   }
//   return years;
// }

// Solution 3
// function nbYear(p0, percent, aug, p, years = 0) {
//   if (p0 < p) {
//     return nbYear(
//       p0 + Math.floor((p0 * percent) / 100) + aug,
//       percent,
//       aug,
//       p,
//       ++years
//     );
//   }
//   return years;
// }

// Solution 4
// const nbYear = (p0, percent, aug, p) =>
//   p0 < p
//     ? true + nbYear((p0 + (p0 * percent) / 100 + aug) | 0, percent, aug, p)
//     : false;

console.log(nbYear(1500, 5, 100, 5000)); // Output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Output: 10
