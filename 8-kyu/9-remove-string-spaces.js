// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Solution 1
// function noSpace(x) {
//   return x.replace(/\s/g, '')
// }

// Solution 2
// function noSpace(x) {
//   return x.split(" ").join("");
// }

// Solution 3
// function noSpace(x) {
//   return x.replaceAll(" ", "");
// }

// Solution 4
// const noSpace = x => x.replace(/ /g, "");

// Solution 5
function noSpace(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // '8j8mBliB8gimjB8B8jlB'
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")); // '88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace("8aaaaa dddd r     ")); // '8aaaaaddddr'
