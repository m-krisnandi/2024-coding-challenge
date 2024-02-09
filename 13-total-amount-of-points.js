// Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// Solution 1
// function points(games) {
//   let res = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       res += 3;
//     } else if (games[i][0] === games[i][2]) {
//       res += 1;
//     }
//   }
//   return res;
// }

// Solution 2
function points(games) {
  let res = 0;
  for (const element of games) {
    if (element[0] > element[2]) {
      res += 3;
    } else if (element[0] === element[2]) {
      res += 1;
    }
  }
  return res;
}

// Solution 3
// const points = (games) =>
//   games.reduce((output, current) => {
//     let pointsToAdd = 0;
//     if (current[0] > current[2]) {
//       pointsToAdd = 3;
//     } else if (current[0] === current[2]) {
//       pointsToAdd = 1;
//     }
//     output += pointsToAdd;
//     return output;
//   }, 0);

// Solution 4
// function points(games) {
//   let total = 0;
//   games.map((game) => {
//     if (game[0] === game[2]) {
//       total += 1;
//     } else if (game[0] > game[2]) {
//       total += 3;
//     }
//   });
//   return total;
// }

// Solution 5
// const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)

// Solution 6
// function points(games) {
//   // totalPoints will store the accumulated points
//   let totalPoints = 0;

//   // loop through the games array to get the scores
//   for (const element of games) {
//     // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
//     let xScore = Number(element.charAt(0));
//     let yScore = Number(element.charAt(2));

//     // Add points depending on the values of xScore compared to yScore
//     if (xScore > yScore) {
//       totalPoints += 3;
//     }
//     if (xScore < yScore) {
//       totalPoints += 0;
//     }
//     if (xScore === yScore) {
//       totalPoints += 1;
//     }
//   }
//   return totalPoints;
// }

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
