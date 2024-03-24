// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// Solution 1
function accum(s) {
  let result = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    let repeated = "";
    for (let j = 0; j < i + 1; j++) {
      const charToPush = j === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      repeated += charToPush;
    }
    result.push(repeated);
  }
  return result.join("-");
}

// Solution 2
// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

// Solution 3
// const accum = (s) =>
//   Array.from(s).reduce(
//     (string, char, i) =>
//       string + "-" + char.toUpperCase() + char.repeat(i).toLowerCase()
//   );

// Solution 4
// function accum(s) {
//   var array = [];
//   for (i = 0; i < s.length; i++) {
//     array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
//   }
//   return array.join("-");
// }

console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("NyffsGeyylB")); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
