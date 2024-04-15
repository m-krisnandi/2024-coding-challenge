// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/563f037412e5ada593000114

// Solution 1
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let gaints = principal * interest - principal * interest * tax;
    principal += gaints;
    years++;
  }
  return years;
}

// Solution 2
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   while (principal < desired) {
//     principal += principal * interest * (1 - tax);
//     years++;
//   }
//   return years;
// }

// Solution 3
// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) / Math.log(1 + interest * (1 - tax))
//   );
// }

// Solution 4
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   let money = principal;
//   if (money === desired) {
//     return years;
//   }
//   do {
//     years += 1;
//     let accrInterest = money * interest;
//     accrInterest = accrInterest - accrInterest * tax;
//     money += accrInterest;
//   } while (money <= desired);
//   return years;
// }

// Solution 5
// function calculateYears(principal, interest, tax, desired) {
//   for (let years = 0; principal < desired; years++) {
//     principal *= 1 + (1 - tax) * interest;
//   }
//   return years;
// }

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
