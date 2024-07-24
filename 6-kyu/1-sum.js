// Coding Challenge 2024
// 6-kyu
// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  while (n >= 10) {
    let result = 0;
    let string = n.toString();
    let array = string.split("");
    for (let i = 0; i < array.length; i++) {
      result += parseInt(array[i]);
    }
    n = result;
  }
  return n;
}

console.log(digitalRoot(16));
