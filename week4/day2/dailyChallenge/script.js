// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

let word=prompt("Enter  words (separated by commas)");
let wordArr=word.split(", ");
function longestWord(arr){
    let bigWord=arr[0].length;
    for (let i=1; i<wordArr.length; i++){
    if(arr[i].length>bigWord){
        bigWord=arr[i].length;
    }
  }
  return bigWord;
}

function stars(){
    let bigWord=longestWord(wordArr);
    console.log("*".repeat(bigWord+4));
    for(let x in wordArr){
        console.log(`* ${wordArr[x]}${" ".repeat(bigWord - wordArr[x].length)} *\n`)
    }
    console.log("*".repeat(bigWord+4));
}
stars();