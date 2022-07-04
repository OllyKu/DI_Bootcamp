// Instructions


// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:
// stars and words





// Prompt the user for several words (separated by commas).
let words = prompt("Enter  words (separated by commas)");
// Put the words into an array.
let wordsArr = words.split(", ");
console.log(wordsArr);

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.
function longestWord(){
    let Word = 0;
    for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length > Word) {
        Word = wordsArr[i].length
    }
}
return Word
}

console.log(longestWord());

function addSpaces(wordsArr,Word){
    if(wordsArr.length==Word){
      return "";
    }
    return " ".repeat(Word - wordsArr.length);
  }

function stars(){
	let Word=longestWord(wordsArr);
	console.log("*".repeat(Word+4));
	for(let x in wordsArr){
		console.log("* "+wordsArr[x]+spaces(words[x],Word)+" *")
	}
	console.log("*".repeat(Word+4));
}
stars();