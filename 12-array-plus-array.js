// Coding Challenge 2024
// 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Solution 1
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, curr) => acc + curr)
// }

// Solution 2
function arrayPlusArray(arr1, arr2) {
    let total = 0;
    let mergeArray = arr1.concat(arr2)
    for (const element of mergeArray) {
        total += element;
    }
    return total
}

// Solution 3
// const arrayPlusArray = (arr1, arr2) => {
//     let total = 0;
//     for (const element of arr1) {
//         total += element;
//     }

//     for (const element of arr2) {
//         total += element;
//     }

//     return total;
// }

// Solution 4
// function arrayPlusArray(arr1, arr2) {
//     let arr = [...arr1, ...arr2];
//     return arr.reduce((a, b) => a + b);
// }

// Solution 5
// function arrayPlusArray(...arrays) {
//     return [].concat(...arrays).reduce((a,b) => a+b,0)
// }

// Solution 6
// function arrayPlusArray() {
//     let res = 0;
//     for (const element of arguments) {
//         for (const value of element) {
//             res += value;
//         }
//     }
//     return res;
// }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))