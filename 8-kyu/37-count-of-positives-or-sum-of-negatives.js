// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Solution 1
function countPositivesSumNegatives(input) {
  if (!input || !Array.isArray(input) || input.length === 0) {
    return [];
  }
  let countPositives = 0;
  let sumNegatives = 0;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      sumNegatives += input[i];
    } else if (input[i] > 0) {
      countPositives++;
    }
  }
  result.push(countPositives);
  result.push(sumNegatives);
  return result;
}

// Solution 2
// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0) return [];
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0, l = input.length; i < l; ++i) {
//     if (input[i] > 0) ++positive;
//     else negative += input[i];
//   }
//   return [positive, negative];
// }

// Solution 3
// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || !input.length) return [];
//   return input.reduce(
//     (arr, n) => {
//       if (n > 0) arr[0]++;
//       if (n < 0) arr[1] += n;
//       return arr;
//     },
//     [0, 0]
//   );
// }

// Solution 4
// function countPositivesSumNegatives(input) {
//   let newArr = [];
//   let positiveNumber = 0;
//   let negativeNumber = 0;
//   // Validate Input
//   if (input === null || input.length === 0) return newArr;
//   // Loop through array of Numbers
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] == 0) continue;
//     // Count positives
//     else if (input[i] > 0) positiveNumber++;
//     // Sum negatives
//     else if (input[i] < 0) negativeNumber += input[i];
//   }
//   // Prepare Output
//   newArr.push(positiveNumber);
//   newArr.push(negativeNumber);
//   return newArr;
// }

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData)); // [10, -65]

let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData2)); // [8, -50]
