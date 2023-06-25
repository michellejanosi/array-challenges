// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
  let sum = 0;

  // calculate the sum of all the items in the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // calculate the average
  const average = sum / arr.length;

  // count how many values are greater than the average
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      count++;
    }
  }

  return count;
}

let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// using higher-order functions
function evenBetterThanAverage(arr) {
    // Calculate the sum of all numbers in the array
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the average
    const average = sum / arr.length;

    // Filter the numbers that are greater than the average and count them
    const count = arr.filter(number => number > average).length;

    return count;
}

result = evenBetterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
