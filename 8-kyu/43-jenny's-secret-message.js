// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55225023e1be1ec8bc000390

// Solution 1
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}

// Solution 2
// function greet(name) {
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// }

// Solution 3
// const greet = (name) => `Hello, ${name === "Johnny" ? "my love" : name}!`;

console.log(greet("Jim")); // "Hello, Jim!"
console.log(greet("Johnny")); // "Hello, my love!"
