// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// Solution 1
function removeSmallest(numbers) {
  let sortNumbers = numbers.slice().sort((a, b) => a - b);
  let smallest = sortNumbers[0];
  let result = [];
  let removed = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === smallest && !removed) {
      removed = true;
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
}

// Solution 2
// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

// Solution 3
// function removeSmallest(numbers) {
//   const min = Math.min.apply(this, numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

// Solution 4
// function removeSmallest(numbers) {
//   let smallest;
//   let newNums = [];
//   numbers.forEach(function (num) {
//     if (smallest > num || smallest === undefined) {
//       smallest = num;
//     }
//   });
//   let index = numbers.indexOf(smallest);
//   numbers.forEach(function (n, i) {
//     if (i !== index) {
//       newNums.push(n);
//     }
//   });
//   return newNums;
// }

// Solution 5
// const removeSmallest = (numbers) =>
//   numbers.filter((_, idx) => idx !== numbers.indexOf(Math.min(...numbers)));

// Solution 6
// function removeSmallest(numbers) {
//   let output = [...numbers];
//   output.splice(numbers.indexOf(Math.min(...numbers)), 1);
//   return output;
// }

// Solution 7
// function removeSmallest(numbers) {
//   let min = Infinity,
//     index;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) min = numbers[(index = i)];
//   }
//   return numbers.slice(0, index).concat(numbers.slice(index + 1));
// }

// Solution 8
// function removeSmallest(numbers) {
//   let array = [];
//   const index = numbers.indexOf(Math.min(...numbers));
//   for (let i = 0; i < numbers.length; i++) {
//     if (i !== index) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
console.log(removeSmallest([])); // []
