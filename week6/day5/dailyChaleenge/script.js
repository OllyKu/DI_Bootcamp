// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// (5, 4, 3, 2, 1, 0) ➞ false
function allTruthy() {

    let arr = [...arguments];

    return arr.every( element => element == true )
};

console.log(allTruthy(true, false, true));