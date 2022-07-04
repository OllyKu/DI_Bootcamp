// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe(myNAme){
    console.log("My name is "+ myNAme);
}
infoAboutMe("Olga")
// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor} `);
}
infoAboutPerson("Olga", 28, "purple");

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.
function calculateTip(){
    let amountOfTheBill = Number(prompt("What is amount of the bill? "));
    if (amountOfTheBill < 50) {
        tip = amountOfTheBill*0.2
    }else if(amountOfTheBill > 50 && amountOfTheBill < 200){
        tip = amountOfTheBill*0.15;

    }else{
        tip = amountOfTheBill*0.1
    }
    console.log(tip, amountOfTheBill+tip);
}
calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function isDivisible() {
    let sum = 0
    for(let i= 0; i<= 500; i++){
        if(i%23 == 0){
            console.log(i);
            sum += i;
        }
    }console.log(`This is the sum of numbers ${sum}`);
}
isDivisible();
// Bonus: Add a parameter divisor to the function.
// isDivisible(divisor)
// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
function isDivisibleBonus(divisor){
    let sum = 0
    for(let i= 0; i<= 500; i++){
        if(i%divisor == 0){
            console.log(i);
            sum += i;
        }
    }console.log(`This is the sum of numbers ${sum}`);
}
isDivisibleBonus(3)

// Exercise 4 : Shopping List
// Instructions
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill(){
    let total = 0
    for(let i=0;i<shoppingList.length;i++){
        console.log(stock[shoppingList[i]]);
        if (stock[shoppingList[i]] > 0) {
            total += prices[shoppingList[i]]
            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[shoppingList[i]] -= 1;
        }
    }
    return total;

}
console.log(myBill());

// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

function changeEnough(itemPrice, amountOfChange){
    change = [];
    for (let i = 0; i < 1; i++) {
        
        change.push(amountOfChange[0] * .25, amountOfChange[1] * .1, amountOfChange[2] * .05, amountOfChange[3] * .01)
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        totalChange = change.reduce(reducer);
        if (itemPrice < totalChange) {
            return true
        } else
            return false
    }
}


// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.


function hotelCost(){
    let nights = Number(prompt("Enter number of nights: "));
    while (nights.length === 0) {
        
        nights = Number(prompt("Enter number of nights: ")) 
    };
    return nights*140  
}
console.log(hotelCost())

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost(){
    let destination = prompt("Your destination is : ")
    //destination === ""
    while(typeof destination == String||destination==null){
        destination = prompt("Your destination is : ")
    }
    switch (destination) {
        case "london":
            planeCost =183
        break;
        case "paris":
            planeCost =220
        break;    
        default:
            planeCost =300
        break;
    }
    return destination
}
console.log(planeRideCost())
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(){
    let car = Number(prompt("Enter number of days: "))
    while (typeof car==Number||car==null){
        car = Number(prompt("Enter number of days: "))
    }
    if (car<10){
        return car*40;
    }else{
        discount = car*40*0.05
        return car*40-discount
    }
}
console.log(rentalCarCost())
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
function totalVacationCost(){
   return console.log(`The car cost: ${hotelCost()}, the hotel cost: ${planeRideCost()}, the plane tickets cost: ${rentalCarCost()}`)
}
totalVacationCost()

