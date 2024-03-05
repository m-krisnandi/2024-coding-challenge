// Coding Challenge 2024
// 20/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Solution 1
function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += parseInt(x[i]);
  }
  return result;
}

// Solution 2
// function sumMix(x) {
//   let result = 0;
//   for (const element of x) {
//     result += parseInt(element);
//   }
//   return result;
// }

// Solution 3
// function sumMix(x) {
//   return x.reduce((acc, curr) => (acc + parseInt(curr)), 0)
// }

// Solution 4
// function sumMix(x) {
//   return eval(x.join("+"));
// }

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 41
