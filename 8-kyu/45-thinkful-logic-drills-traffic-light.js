// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// Solution 1
// function updateLight(current) {
//   if (current === "green") {
//     return "yellow";
//   } else if (current === "yellow") {
//     return "red";
//   } else {
//     return "green";
//   }
// }

// Solution 2 - not best practice
// function updateLight(current) {
//   return current === "yellow"
//     ? "red"
//     : current === "green"
//     ? "yellow"
//     : "green";
// }

// Solution 3
function updateLight(current) {
  const lightStates = {
    red: "green",
    yellow: "red",
    green: "yellow",
  };
  return lightStates[current] || "invalid";
}

// Solution 4
// const updateLight = (current) =>
//   ({
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   }[current]);

console.log(updateLight("green")); // "yellow"
console.log(updateLight("yellow")); // "red"
console.log(updateLight("red")); // "green"
