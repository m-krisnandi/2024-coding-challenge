// Coding Challenge 2024
// 19/366
// https://www.codewars.com/kata/5aa736a455f906981800360d

// Solution 1
// function feast(beast, dish) {
//   let result = true;
//   if (beast[0] !== dish[0] && beast.at(-1) !== dish.at(-1)) {
//     result = false;
//   }
//   return result;
// }

// Solution 2
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// Solution 3
// function feast(beast, dish) {
//   return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
// }

// Solution 4
// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
// }

// Solution 5
// const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);

console.log(feast("great blue heron", "garlic naan")); // true
console.log(feast("great blue heron", "garlic naa")); // false
