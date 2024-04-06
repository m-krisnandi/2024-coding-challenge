// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/544aed4c4a30184e960010f4

// Solution 1
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  return arr.length !== 0 ? arr : `${integer} is prime`;
}

// Solution 2
// function divisors(integer) {
//   let res = [];
//   for (let i = 2; i <= Math.floor(integer / 2); ++i)
//     if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + " is prime";
// }

// Solution 3
// function divisors(int) {
//   const arr = Array.from({ length: int - 1 }, (_, i) => i + 1)
//     .slice(1)
//     .filter((el) => int % el === 0);
//   return arr.length ? arr : `${int} is prime`;
// }

// Solution 4
// function divisors(integer) {
//   let divisors = [...Array(integer).keys()]
//     .slice(2, integer)
//     .filter((div) => integer % div == 0);
//   return divisors.length > 0 ? divisors : integer + " is prime";
// }

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // "13 is prime"
