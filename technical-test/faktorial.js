// Looping
const factorial = (value) => {
  if (value <= 0) {
    return 1;
  }

  let result = 1;
  for (let i = value; i >= 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// Recursive
const factorialRecursive = (value) => {
    if (value <= 0) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

console.log(factorialRecursive(5)) // 120
