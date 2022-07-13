// Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
let form = document.getElementByTagName("form");
console.log(form)


let input = document.getElementById("fname")
console.log(input)
let inputTwo = document.getElementById("lname")
console.log(inputTwo)
let inputSubmit = document.getElementById("Submit")
console.log(inputSubmit);


let inputAtt = document.getAttribute("name")
console.log(inputAtt )
let inputTwoAtt = document.getAttribute("name")
console.log(inputTwoAtt)
let inputSubmitAtt = document.getAttribute("name")
console.log(inputSubmitAtt)

form.addEventListener("submit", function (event){
    event.preventDefault()
    sendData()
})

let userAnswers = []
function sendData(){
    if (input.value == "" || inputTwo.value == ""){
        alert("Enter a valid name")
    }else {
        
        userAnswers.push(input.value)
        userAnswers.push(inputTwo.value)
    } 
    createli()
}
function createli(){
    let ul = document.querySelector("ul")
    for (let i = 0; i < userAnswers.length; i++) {        
        let il = document.createElement("li")
        il.innerText =userAnswers[i]
        ul.appendChild(il)              
    }
}