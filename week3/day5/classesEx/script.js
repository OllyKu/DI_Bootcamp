let howManyTimeDidYouTried = 0
let diceResult = Math.floor(Math.random()*(6-1+1));

while (diceResult !=6){
    console(diceResult, howManyTimeDidYouTried)
    diceResult = Math.floor(Math.random()*(6- 1 + 1) + 1);
    howManyTimeDidYouTried++
}
console.log(diceResult, howManyTimeDidYouTried)


// exercise 1
for (let index = 0; index <= 15; index++){
    index%2
    ? console.log(`${index} is odd`)
    : console.log(`${index} is even`)
}

// exercise2

// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
// 2. Write a JavaScript for loop that will go through the variable names

// if the item is not a string, go out of the loop.
// if the item is a string, display it.

// let names =["John", "Sarah",23, "Bob", 78];

// for (x of names){
//     if (isNaN(x) && x.charAt(0) !== x.charAt(0).toLowerCase()){
//         names [1] == names.charAt(0).toUpperCase + x.slice(1);
//     }else 
// }


for (let index = 0; index<names.length; index++){
    let name = names[index];
    if (typeof name !== "string") continue
    else{
    if (!name[0]=== name[0].toLocaleLowerCase()){
        name =`${name.charAt(0).toUpperCase()}${name.slice(1)}`
    }
  }
  console.log()
}

// For/In Loop
// Loops through the properties of an object. This loop continues until all of the properties of the Object are processed.

// Loops also through the index of an array. This loop continues until all of the elements of the array are processed.

let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}

// Syntax

// for (variable in array)
//   statement
let colors = ["blue", "yellow", "red"];

for (let i in colors) {
   console.log(i); //0 1 2
   console.log(colors[i]) //blue yellow red
}

// For/Of Loop
// Loops through the values of an iterable objects such as Arrays and Strings.

// Careful: an object is not iterable

let colors = ["blue", "yellow", "red"];

for (let i of colors) {
   console.log(i); // logs blue, yellow, red
}


//for of doesn't work for object
let person = {fname:"John", lname:"Doe", age:25};
for (let x of person) {
  console.log(x) 
} // Error: object is not iterable