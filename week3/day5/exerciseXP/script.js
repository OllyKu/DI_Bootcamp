// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people [2] = "Jason";
people.push("Olga");
console.log(people.indexOf("Mary"));
let people2 = people.slice(1,3);
console.log(people.indexOf("Foo")); //-1 means "no match found". 
let last = people.pop();
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let i in people){
    console.log(people[i]);
}

for (i of people){
    
    if (i == "Jason"){  

    break; 
    }
    console.log(i);
}

// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
let colors=["pink","violet","yellow","orange","green"];
let suffix=["st","nd","rd","th","th"]
for (let a=1; a <= colors.length; a++) {
    console.log(`My #${a} choice is ${colors[a-1]}`);
}
for (let c=1; c <= colors.length; c++) {
    console.log(`My ${c}${suffix[c-1]} choice is ${colors[c-1]}`);
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?



let num1 = Number(prompt("Enter your number: "));
 while(num1<10){
    num1 = Number(prompt("Enter your number: "))
 }

//  Exercise 4 : Building Management

 
//  Review About Objects
//  Copy and paste the above object to your Javascript file.
 
//  Console.log the number of floors in the building.
 
//  Console.log how many apartments are on the floors 1 and 3.
 
//  Console.log the name of the second tenant and the number of rooms he has in his apartment.
 
//  Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

 let building = {
     numberOfFloors : 4,
     numberOfAptByFloor : {
         firstFloor : 3,
         secondFloor : 4,
         thirdFloor : 9,
         fourthFloor : 2,
     },
     nameOfTenants : ["Sarah", "Dan", "David"],
     numberOfRoomsAndRent:  {
         sarah: [3, 990],
         dan :  [4, 1000],
         david : [1, 500],
     },
 }
 console.log(building.numberOfFloors);
 console.log(building.numberOfAptByFloor.firstFloor && building.numberOfAptByFloor.thirdFloor);
 console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
 if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]=1200;}

    // Exercise 5 : Family
    // Instructions
    // Create an object called family with a few key value pairs.
    // Using a for in loop, console.log the keys of the object.
    // Using a for in loop, console.log the values of the object.

    let family = {mama:"Sarah", dad:"John", son:"Billy"};
    for(i in family){
        console.log(i);
        console.log(family[i]);
    }

// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
 for(i in details){
    console.log(i,details[i])
 }

//  Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let societyName="";
for(let n in names){
  societyName+=names[n][0];
}
console.log(societyName);