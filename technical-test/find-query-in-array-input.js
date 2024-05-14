const countInput = (input) => {
    let counts = {};
    for (let i = 0; i < input.length; i++) {
        counts[input[i]] = (counts[input[i]] || 0) + 1;
    }
    return counts;
}

const findQueryInArrayInput = (input, query) => {
    let counts = countInput(input);
    let result = [];
    for (let i = 0; i < query.length; i++) {
        result.push(counts[query[i]] || 0);
    }
    return result;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
console.log(findQueryInArrayInput(input, query)) // [1, 0, 2]