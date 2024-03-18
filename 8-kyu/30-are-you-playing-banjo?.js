// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/53af2b8861023f1d88000832

// Solution 1
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return `${name + " plays banjo"}`;
  }
  return `${name + " does not play banjo"}`;
}

// Solution 2
// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === "r") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// }

// Solution 3
// function areYouPlayingBanjo(name) {
//   return (
//     name +
//     (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
//     " banjo"
//   );
// }

// Solution 4
// function areYouPlayingBanjo(name) {
//   return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }

// Solution 5
// const areYouPlayingBanjo = (name) => {
//   const plays = name.toLowerCase().startsWith("r") ? "plays" : "does not play";
//   return `${name} ${plays} banjo`;
// };

console.log(areYouPlayingBanjo("Adam")); // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // "Ringo plays banjo"
console.log(areYouPlayingBanjo("rolf")); // "rolf plays banjo"
