// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/57f609022f4d534f05000024

// Solution 1
function stray(numbers) {
  let set = new Set();
  numbers.forEach((number) => {
    if (set.has(number)) {
      set.delete(number);
    } else {
      set.add(number);
    }
  });
  return set.values().next().value;
}

// Solution 2
// function stray(numbers) {
//   for (let i in numbers) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
//       return numbers[i];
//     }
//   }
// }

// Solution 3
// const stray = (nums) => nums.reduce((a, b) => a ^ b);

// Solution 4
// function stray(numbers) {
//   let a = numbers.sort();
//   if (a[0] != a[1]) {
//     return a[0];
//   }
//   return a[a.length - 1];
// }

// Solution 5
// const stray = (numbers) =>
//   numbers.find((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));

// Solution 6
// const stray = (numbers) =>
//   numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el))[0];

console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
