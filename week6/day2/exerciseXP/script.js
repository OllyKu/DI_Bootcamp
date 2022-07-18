// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


let winBattle = () => true;

let experiencePoints;
winBattle() == true ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints)

// Exercise 3 : Is It A String ?

// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

let isString = (e) =>{
   typeof e === 'string'?  true : false;
}
console.log(isString('hello'))
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Colors
// Instructions
// Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
color.forEach((element, index) => {
  if (element == "Blue") {
    console.log(`${index + 1}${ordinal[1]} Choice is ${element}`);
  } else if (element == "Green") {
    console.log(`${index + 1}${ordinal[2]} Choice is ${element}`);
  } else if (element == "Red") {
    console.log(`${index + 1}${ordinal[3]} Choice is ${element}`);
  } else {
    console.log(`${index + 1}${ordinal[0]} Choice is ${element}`);
  }
});

color.includes("Violet") ? console.log("Yeah"):console.log("No..")

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
 let bankAmount = 5000;
 let details = ["+200", "-100", "+146", "+167", "-2900"];
 const vatAmount = num => num * 0.17;
 const bankAccount = arr => {
     arr.forEach(el => {
         el = Number(el);
         if (el < 0) el += vatAmount(el); 
         bankAmount += el;
     }); return bankAmount;
 }
 
 console.log(bankAccount(details));



// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.


// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// run in the console:
q1()
// will alert 3' because we re-assigned the a variable from 5 to 3 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// run in the console:
q22() //will be console 0
q2() //will console 5


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3() // console hello
q32() // alert hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4() // will alert test, not 1

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// both alerts will console 5, because we rewrite function from 2 to 5