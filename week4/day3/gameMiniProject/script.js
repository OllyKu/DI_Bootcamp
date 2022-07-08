// First Part
// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), 
// create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function).
//  Make sure that the number is rounded.

// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.




// function checkValidity(num){ //check the validity of the user’s number 

//     if(isNaN(num)){
//       alert("Sorry Not a number, Goodbye");// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
//     }
//     if(num<0||num>10){
//         alert("Sorry it is not a good number, Goodbye");// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
//     }
//  }

function playTheGame(){
    let askUser = confirm("would like to play the game ?")
    if(askUser === false){
        alert("No problem, Goodbye");
    } else{
        let userNumber = Number(prompt("Enter a number between 0 and 10"))
        function checkValidity(num){ //check the validity of the user’s number 

            if(isNaN(num)){
              alert("Sorry Not a number, Goodbye");// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
            }
            if(num<0||num>10){
                alert("Sorry it is not a good number, Goodbye");// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
            } else{
                let computerNumber=Math.floor(Math.random() * (10 + 1)) // create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function).
                console.log(computerNumber);
            }
         }
        console.log(checkValidity(userNumber));
        // let computerNumber=Math.floor(Math.random() * 10) // create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function).
        // console.log(computerNumber);

    }
}
function compareNumbers(userNumber,computerNumber){ //create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
 let guess = 3
 while(userNumber!=computerNumber && guess!=0){
    if(userNumber == compareNumbers){
        alert("Winner!")
    }else if(userNumber>computerNumber){
        alert("Your number is bigger then the computers, guess again");
        userNumber = Number(prompt("Enter a number between 0 and 10"));
    }else{
        alert("Your number is smaller then the computers, guess again");
        userNumber = Number(prompt("Enter a number between 0 and 10"));
    }
    guess--;
    if(guess==0){
        alert("out of chances");
    }
 }
}