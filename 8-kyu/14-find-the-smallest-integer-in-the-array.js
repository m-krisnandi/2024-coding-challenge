// Coding Challenge 2024
// 8-kyu
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// Solution 1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function (a, b) {
      return b - a;
    });
    let x = args.length;
    for (x; x--; ) {
      if (args[x] < 0) {
        args.pop();
      }
    }
    return args.slice(-1)[0];
  }
}

// Solution 2
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// Solution 3
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min.apply(null, args);
//   }
// }

// Solution 4 // poor performace, you need to sort whole array to get a result
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a, b) => a - b)[0];
//   }
// }

const sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(sif.findSmallestInt([78, 56, 232, 412, 228])); // 56
console.log(sif.findSmallestInt([78, 56, 232, 12, 0])); // 0
