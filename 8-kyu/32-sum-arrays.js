// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Sum Numbers
// Solution 1
function sum(numbers) {
  "use strict";
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// Solution 2
// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// Solution 3
// function sum(numbers) {
//   "use strict";
//   return numbers.length == 0 ? 0 : numbers.shift() + sum(numbers);
// }

// Solution 4
/*
Recursive Solution:
sum=(a,t=0)=>a.length?sum(a.slice(1),t+a[0]):t

Using Map:
sum=(a,t=0)=>a.map(v=>t+=v).pop()||0

Using Reduce:
sum=a=>a.reduce((t,c)=>t+c,0)

Recursive Using Pop*/
// sum = (a, q = a.pop()) => (q == +q ? q + sum(a) : 0);

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([])); // 0
