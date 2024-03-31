// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/55b42574ff091733d900002f

// Solution 1
function friend(friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

// Solution 2
// function friend(friends) {
//   return friends.filter((n) => n.length === 4);
// }

// Solution 3
// function friend(friends) {
//   var realFriends = [];
//   for (i = 0; i < friends.length; i++) {
//     if (friends[i].length == 4 && isNaN(friends[i])) {
//       realFriends.push(friends[i]);
//     }
//   }
//   return realFriends;
// }

// Solution 4
// const friend = (friends) =>
//   friends.filter((f) => f.length == 4 && /^[a-zA-Z]+$/.test(f));

console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
