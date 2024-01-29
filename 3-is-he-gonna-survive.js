// Coding Challenge 2024
// 3/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// Solution 1
// function hero(bullets, dragons){
//     return bullets / 2 >= dragons 
// }

// Solution 2
// const hero = (bullets, dragons) => bullets / 2 >= dragons

// Solution 3
// const hero = (bullets, dragons) => dragons * 2 <= bullets

// Solution 4
// function hero(bullets, dragons){
//     return bullets >= dragons * 2
// }

// Solution 5
const BULLETS_PER_DRAGON = 2;

function hero(bullets, dragons) {
  const survive = bullets >= dragons * BULLETS_PER_DRAGON;
  return survive;
}

console.log(hero(50, 25))