// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/582cb0224e56e068d800003c

// Todo
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// Solution 1
function litres(time) {
  return Math.floor(time * 0.5);
}

// Solution 2
// function litres(time) {
//   return Math.floor(time / 2);
// }

// Solution 3
// litres = t => ~~(t / 2);

// Solution 4
// function litres(time) {
//   return parseInt(time / 2);
// }

// Solution 5
// Bitwise operation, right shift 1 times.
// 5(decimal) = 0101(bit) >> 1 => 0010(bit) = 2(decimal)
// 5(decimal) = 0101(bit) >> 2 => 0001(bit) = 1(decimal)
// 13(decimal) = 1101(bit) >> 1 => 0110(bit) = 6(decimal)
// 13(decimal) = 1101(bit) >> 2 => 0011(bit) = 3(decimal)
// function litres(time) {
//   return time >> 1;
// }

console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
