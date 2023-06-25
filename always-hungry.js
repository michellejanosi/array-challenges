// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
  let foundFood = false; // keep track if food was found

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      foundFood = true; // set to true because food was found
    }
  }

  // if food was not found in the array
  if (!foundFood) {
    console.log("I'm hungry");
  }
}

console.log(alwaysHungry([3.14, "food", "pie", true, "food"]));
// this should console log "yummy", "yummy"
console.log(alwaysHungry([4, 1, 5, 7, 2]));
// this should console log "I'm hungry"
