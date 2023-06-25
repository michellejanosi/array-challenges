// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
      }
    }

    // using .filter() method
    // const filteredArr = arr.filter((value) => value > cutoff);

    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
