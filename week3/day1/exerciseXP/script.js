// Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>
let favFood = "Apples";
let meal = "Lunch";
console.log(`I eat `, favFood, `at every `, meal);


// Exercise 2 : Series
// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = 3
let myWatchedSeriesSentence = `I watched`;
let series = `${myWatchedSeriesSentence} ${myWatchedSeriesLength} series: ${myWatchedSeries.join(', ')}`;
console.log(series);


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries [2] = "friends";
myWatchedSeries.push('office');
myWatchedSeries.splice(0, 0, "Game ot the thrones");
myWatchedSeries.splice(1, 1, );
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celsiusTem = 25;
let fahrenheitTem = (celsiusTem/9) * 9 + 32;
let temp = `${celsiusTem} C is ${fahrenheitTem} F`
console.log(temp);

// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5

// Using the code below:

//     let c;
//     let a = 34;
//     let b = 21;

//     console.log(a+b) //first expression
//     // Prediction: it wiil be number 55, because a and b is a numbers
//     // Actual: 55

//     a = 2;

//     console.log(a+b) //second expression
//     // Prediction: it will be number 23, becuase a and b is numbers, and we reassign the value of a from 34 to 2
//     // Actual: 23

// What will be the outcome of a + b in the first expression ? 55
// What will be the outcome of a + b in the second expression ? 23
// What is the value of c? undefined

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');
// it wiil be 75 because 3+4 it's 7 they are numbers and '5' is a string, so 7 and 5 just concatinate with each other


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example
// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


// What is the output of each of the expressions below?


// typeof(15)
// // Prediction: number
// // Actual: number

// typeof(5.5)
// // Prediction: float, because it's a number with point
// // Actual: float

// typeof(NaN)
// // Prediction: number, NaN used for numbers
// // Actual: number

// typeof("hello")
// // Prediction: string because it's a word inside quotes
// // Actual: string

// typeof(true)
// // Prediction: boolean
// // Actual:boolean

// typeof(1 != 2)
// // Prediction: boolean, because 1 is true and 2 is also true, everything bigger 0 is true
// // Actual: boolean

// "hamburger" + "s"
// // Prediction: "hamburgers" because it a concatination between two strings
// // Actual:"hamburgers"

// "hamburgers" - "s"
// // Prediction: we can't do - for string' it's for numbers so NaN not a number
// // Actual: NaN

// "1" + "3"
// // Prediction: "13" it's two string because of quotes
// // Actual:"13"

// "1" - "3"
// // Prediction:
// // Actual:-2

// "johnny" + 5
// // Prediction:"johnny5" it's two strings
// // Actual: "johnny5"

// "johnny" - 5
// // Prediction:NaN besause it's string and number
// // Actual: NaN

// 99 * "hello"
// // Prediction: NaN besause it's string and number
// // Actual:Nan

// 1 != 1
// // Prediction: False because 1 is equal to 1
// // Actual: False

// 1 == "1"
// // Prediction: true they are equals 
// // Actual:true

// 1 === "1"
// // Prediction: false because their type is different number and string 
// // Actual: false




// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// What is the output of each of the expressions below?


// 5 + "34"
// // Prediction:"534" it's concatinete string and number
// // Actual: '534'

// 5 - "4"
// // Prediction:
// // Actual: 1

// 10 % 5
// // Prediction: 0  % Modulus (Division Remainder)
// // Actual:0

// 5 % 10
// // Prediction:5 Remainder with positive dividend
// // Actual: 5

// "Java" + "Script"
// // Prediction: concatination of two string "JavaScript"
// // Actual: "JavaScript"

// " " + " "
// // Prediction: two blank space bucause it a string
// // Actual:'  '

// " " + 0
// // Prediction: ' 0' blank and zero will be in one string
// // Actual:' 0'

// true + true
// // Prediction: 2 because true it's 1 so 1+1 =2
// // Actual:2

// true + false
// // Prediction: 1 true it's 1 and false it's 0 1+0=1
// // Actual:1

// false + true
// // Prediction: 1 true it's 1 and false it's 0 1+0=1
// // Actual:1 

// false - true
// // Prediction: -1 0-1=-1 rue it's 1 and false it's 0
// // Actual:

// !true
// // Prediction: false because yes it is true expression
// // Actual: false

// 3 - 4
// // Prediction:-1 it's a regular numbers
// // Actual:

// "Bob" - "bill"
// // Prediction: NaN because it's a two strings
// // Actual:NaN