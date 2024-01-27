// 1 Solution
// const grow = (x) => x.reduce((acc, curr) => acc * curr);

// 2 Solution
// const grow=x=>eval(x.join("*"))

// 3 Solution
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i]
    }

    return res
}

console.log(grow([2,2,2,2,2,2]))