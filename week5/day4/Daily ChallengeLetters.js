// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions
let form = document.getElementById("form");
let text = document.getElementById("text");
let letters = /^[A-Za-z]+$/ //Regular Expressions
let answer = []

form.addEventListener("submit", function (event){
    event.preventDefault()
    if(text.value.match(letters)){
        answer.push(text.value)
        console.log(answer);
    }
    else{ 
        alert("Please enter a text with letters only.")
    }  
  
})
