// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// Solution 1
function openOrSenior(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

// Solution 2
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }

// Solution 3
// function openOrSenior(data) {
//   function determineMembership([age, handicap]) {
//     return age >= 55 && handicap > 7 ? "Senior" : "Open";
//   }
//   return data.map(determineMembership);
// }

// Solution 4
// const Category = {
//   Open: "Open",
//   Senior: "Senior",
// };
// function openOrSenior(data) {
//   return data.map(([age, handicap]) => {
//     if (age >= 55 && handicap > 7) {
//       return Category.Senior;
//     }
//     return Category.Open;
//   });
// }

// Solution 5
// function openOrSenior(data) {
//   var arr = data.map(function (item) {
//     if (item[0] >= 55 && item[1] > 7) {
//       return "Senior";
//     } else {
//       return "Open";
//     }
//   });
//   return arr;
// }

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ['Open', 'Senior', 'Open', 'Senior']
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
); // ['Open', 'Open', 'Open', 'Open']
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
); // ['Senior', 'Open', 'Open', 'Open']
