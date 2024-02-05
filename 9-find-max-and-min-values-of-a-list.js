// Coding Challenge 2024
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// Solution 1
// const min = function(list){
//     let minValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (minValue > list[i]){
//             minValue = list[i]
//         }
//     }
//     return minValue;
// }

// const max = function(list){
//     let maxValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (maxValue < list[i]){
//             maxValue = list[i]
//         }
//     }
//     return maxValue;
// }

// Solution 2
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Solution 3
// const min = function(list){
//     list.sort((a, b) => (a - b));
//     return list[0];
// }

// const max = function(list){
//     list.sort((a, b) => (b - a));
//     return list[0];
// }

// Solution 4
const min = function(list){
    let min =list[0];
    for(const element of list){
       let cur = element;
       if (cur<min) min=cur;
    }
    return min;
}

const max = function(list){
    let max =list[0];
    for(const element of list){
       let cur = element;
       if (cur>max) max=cur;
    }
    return max;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))