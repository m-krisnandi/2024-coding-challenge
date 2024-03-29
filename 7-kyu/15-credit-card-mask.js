// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
// Solution 1
function maskify(cc) {
  let result = "";
  let creditCard = cc.split("");
  for (let i = 0; i < creditCard.length - 4; i++) {
    result += "#";
  }
  return result + cc.slice(-4);
}

// Solution 2
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

// Solution 3
// function maskify(cc) {
//   return cc.slice(-4).padStart(cc.length, "#");
// }

// Solution 4
// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, "#");
// }

// Solution 5
// function maskify(cc) {
//   return cc.replace(/.(?=.{4})/g, "#");
// }

// Solution 6
// maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

console.log(maskify("4556364607935616")); // '############5616'
console.log(maskify("1")); // '1'
console.log(maskify("11111")); // '#1111'
