// 1 Solution
// const grow = (x) => x.reduce((acc, curr) => acc * curr);

// 2 Solution
const grow=x=>eval(x.join("*"))

console.log(grow([2,2,2,2,2, 2]))