// Coding Challenge 2024
// 11/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

// Solution 1
const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    } else {
        return `Player ${rules[p1] === p2 ? '1' : '2'} won!`
    }
};

// Solution 2
// const rps = (p1, p2) => {
//     if (p1 == p2)
//       return 'Draw!';
      
//      if (p1 == 'rock' && p2 == 'scissors') 
//        return 'Player 1 won!'
//      else if (p1 == 'scissors' && p2 == 'paper') 
//        return 'Player 1 won!'
//      else if (p1 == 'paper' && p2 == 'rock') 
//        return 'Player 1 won!'
//      else
//        return 'Player 2 won!';
// };

console.log(rps('rock', 'scissors'))