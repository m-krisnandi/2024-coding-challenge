// Coding Challenge 2024
// 10/366
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

// Solution 1
// function stringToArray(string){
// 	return string.split(' ')
// }

// Solution 2
function stringToArray(string){
    const result = [];
    let traverse = function foo(string){
        for(let i=0;i<string.length;i++){
            let chr = string.charAt(i);
            if(chr === " "){
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}

console.log(stringToArray("Robin Singh"))