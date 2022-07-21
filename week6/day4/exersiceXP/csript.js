// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sum = (a,b) => a+b;
console.log(sum(2,3));

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

let weight = (kg) => kg*1000;
console.log(weight(1));

function weight(kg){
    return kg*1000
}
console.log(weight(2));
//a function declaration is loading before the code was executed, a function expression happen just when u reach this line of code.



// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."
(
    function bio (childrens, partnersName, location, job) {
        let sentance = document.createElement('p');
        sentance.textContent =`You will be a ${job} in ${location}, 
         and married to ${partnersName} with  ${childrens} kids.`
        document.body.append(sentance)
    }
)()

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(
    function user(userName) {
        let newDiv = document.createElement('div');
        let name = document.createElement('p')
        name.textContent = userName;
        newDiv.appendChild(name)
        let pic = document.createElement('img')
        pic.setAttribute('src','https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419');
        pic.style.width="4vw";
        newDiv.appendChild(pic)
        document.body[0].appendChild(newDiv)
    }
)("Olga")


// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, 
// containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size){
	function addIngredients(first,second,third){
		const p=document.createElement('p');
		p.textContent=`The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
		document.body.appendChild(p);
	}
	addIngredients("banana","strawberry","cherry");

}
makeJuice("medium");
