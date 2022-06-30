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