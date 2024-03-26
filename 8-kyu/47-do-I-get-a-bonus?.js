// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// Solution 1
function bonusTime(salary, bonus) {
  let salaryWithBonus = salary * 10;
  if (bonus === true) {
    return `£${salaryWithBonus}`;
  }
  return `£${salary}`;
}

// Solution 2
// function bonusTime(salary, bonus) {
//   return bonus ? `£${10 * salary}` : `£${salary}`;
// }

// Solution 3
// function bonusTime(salary, bonus) {
//   return "£" + (bonus ? salary * 10 : salary);
// }

console.log(bonusTime(10000, true)); // '£100000'
console.log(bonusTime(10000, false)); // '£10000'
