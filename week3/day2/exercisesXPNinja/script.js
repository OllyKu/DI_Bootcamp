// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// Evaluate the comparisons found below:

// Look at this link for help

//     5 >= 1 true
//     0 === 1 false
//     4 <= 1 false
//     1 != 1 false
//     "A" > "B" false
//     "B" < "C" true
//     "a" > "A" true
//     "b" < "A" false
//     true === false
//     true != true

// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5

let num1 = prompt("Enter your numbers: ");
let partOfNum = num1.split(",");
let sum = Number(partOfNum[0]) + Number(partOfNum[1]);
console.log(sum);

// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"
