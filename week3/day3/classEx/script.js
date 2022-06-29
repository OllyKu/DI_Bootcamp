let age = Number(prompt("Enter your age: ") );
if (age<18){
    alert("Sorry, you are too young to drive this car. Powering off")
} else if(age === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}
else{
    alert ("Powering On. Enjoy the ride!")
}

let logIn ={userName:"OlgaK", password:"abcd12"};
let list = [logIn];
console.log(list);
let newsfeed = [{userName:'OlgaK'},
                {password:"abcd12"},
                {timeline:"20.05"}];
console.log(newsfeed);