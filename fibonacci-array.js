// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  let fibArr = [0, 1];

  // Loop from 2 to n - 1, since the first two numbers are already in the array
  for (let i = 2; i < n; i++) {
    // The next Fibonacci number is the sum of the last two numbers in the array
    let nextFibNumber = fibArr[i - 1] + fibArr[i - 2];

    // Push the next Fibonacci number to the array
    fibArr.push(nextFibNumber);
  }

  return fibArr;
}

const result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
