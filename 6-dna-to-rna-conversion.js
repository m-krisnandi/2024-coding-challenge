// Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// Solution 1
// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] == 'T') {
//             rna += 'U'
//         } else {
//             rna += dna[i]
//         }
//     }
//     return rna;
// }

// Solution 2
const DNAtoRNA = (dna) => dna.split('T').join('U')

// Solution 3
// const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('')

// Solution 4
// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');

// Solution 5
// const DNAtoRNA = (dna) => dna.replaceAll('T','U');

console.log(DNAtoRNA("TTTT"))