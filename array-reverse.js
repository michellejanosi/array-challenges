// Write a function that will reverse the values an array and return them.

function reverse(arr) {
  // using the reverse built-in method
  // return arr.reverse();

  // using a for loop
  const newArr = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - 1 - i];
  }

  return newArr;

  // using higher order functions
  // return arr.reduce((accumulator, currentValue) => [currentValue, ...accumulator], []);
}

const result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
