// Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// 1 Solution
// const grow = (x) => x.reduce((acc, curr) => acc * curr);

// 2 Solution
// const grow=x=>eval(x.join("*"))

// 3 Solution
// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//         res *= x[i]
//     }
//     return res
// }

// 4 Solution
const grow = x => {
    let res = 1;
    for (const element of x) {
        res *= element
    }

    return res
}

console.log(grow([2,2,2,2,2,2]))