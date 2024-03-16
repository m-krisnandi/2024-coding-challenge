// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Solution 1
function abbrevName(name) {
  let firstName = name.split(" ").join()[0];
  let LastName = name.split(" ").slice(-1).join()[0];
  let fullName = firstName + "." + LastName;
  return fullName.toUpperCase();
}

// Solution 2
// function abbrevName(name) {
//   let nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// Solution 3
// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }

// Solution 4
// const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();

// Solution 5
// function abbrevName(name) {
//   return (
//     name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
//   );
// }

console.log(abbrevName("Sam Harris")); // "S.H"
console.log(abbrevName("Patrick Feenan")); // "P.F"
console.log(abbrevName("Evan Cole")); // "E.C"
