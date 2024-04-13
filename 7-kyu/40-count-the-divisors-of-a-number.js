// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/542c0f198e077084c0000c2e

// Solution 1
function getDivisorsCnt(n) {
  let result = 0;
  if (n % Math.sqrt(n) === 0) {
    result++;
  }
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      result += 2;
    }
  }
  return result;
}

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
