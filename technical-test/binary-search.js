const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        let currentValue = array[middle];

        if (currentValue === target) {
            return middle;
        } else if (currentValue < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

const numberArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const numberArr2 = 2;
const target = 12;
const target2 = 3;

console.log(binarySearch(numberArr, target)) // 5
console.log(binarySearch(numberArr, target2)) // -1