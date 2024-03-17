// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55a70521798b14d4750000a4

// Solution 1
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// Solution 2
// function greet(name) {
//   return "Hello, " + name + " how are you doing today?";
// }

// Solution 3
// function greet(name) {
//   return "Hello, <name> how are you doing today?".replace("<name>", name);
// }

// Solution 4
// function greet(name) {
//   let a = name.split("");
//   let j = [];
//   a[0] = "Hello,";
//   a[1] = name;
//   a[2] = "how are you doing today?";
//   j.push(a[0], a[1], a[2]);
//   return j.join(" ");
// }

console.log(greet("Ryan")); // "Hello, Ryan how are you doing today?"
console.log(greet("Shingles")); // "Hello, Shingles how are you doing today?"
