// Coding Challenge 2024
// 7-kyu
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// Solution 1
function dnaStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    let convDna = "";
    if (dna[i] === "A") {
      convDna += "T";
    } else if (dna[i] === "T") {
      convDna = "A";
    } else if (dna[i] === "G") {
      convDna = "C";
    } else if (dna[i] === "C") {
      convDna = "G";
    }
    result += convDna;
  }
  return result;
}

// Solution 2
// function dnaStrand(dna) {
//   let result = "";
//   for (const element of dna) {
//     let convDna = "";
//     if (element === "A") {
//       convDna += "T";
//     } else if (element === "T") {
//       convDna = "A";
//     } else if (element === "G") {
//       convDna = "C";
//     } else if (element === "C") {
//       convDna = "G";
//     }
//     result += convDna;
//   }
//   return result;
// }

// Solution 3
// function dnaStrand(dna) {
//   return dna.replace(/./g, function (c) {
//     return dnaStrand.pairs[c];
//   });
// }
// dnaStrand.pairs = {
//   A: "T",
//   T: "A",
//   C: "G",
//   G: "C",
// };

// Solution 4
// const pairs = { A: "T", T: "A", C: "G", G: "C" };
// function dnaStrand(dna) {
//   return dna
//     .split("")
//     .map(function (v) {
//       return pairs[v];
//     })
//     .join("");
// }

// Solution 5 - fastest run-time
// function dnaStrand(dna) {
//   var res = "";
//   for (var i = 0; i < dna.length; i++) {
//     switch (dna[i]) {
//       case "A":
//         res += "T";
//         break;
//       case "T":
//         res += "A";
//         break;
//       case "G":
//         res += "C";
//         break;
//       case "C":
//         res += "G";
//         break;
//     }
//   }
//   return res;
// }

// Solution 6
// function dnaStrand(dna) {
//   return dna
//     .replace(/A/g, "t")
//     .replace(/T/g, "a")
//     .replace(/C/g, "g")
//     .replace(/G/g, "c")
//     .toUpperCase();
// }

// Solution 7
// const dnaStrand = (dna) => dna.replace(/./g, (m) => "CGAT"["GCTA".indexOf(m)]);

// Solution 8 - data structures
// function dnaStrand(dna) {
//   let newDNA = "";
//   let dnaKeys = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };
//   for (let i = 0; i < dna.length; i++) {
//     let char = dna[i];
//     newDNA += dnaKeys[char];
//   }
//   return newDNA;
// }

console.log(dnaStrand("AAAA")); // 'TTTT'
console.log(dnaStrand("ATTGC")); // "TAACG"
console.log(dnaStrand("GTAT")); // "CATA"
