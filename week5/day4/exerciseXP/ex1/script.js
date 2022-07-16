// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function hello(){
    alert("Hello World")    
}
setTimeout(hello(),2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function newP (){
    let div = document.getElementById("container")
    let p = document.createElement("p").textContent = "Hello World"
    div.append(p)
}
setTimeout(newP(),2000);


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
//  as soon as there will be 5 paragraphs inside the <div id="container">.

let interval = setInterval(newP,2000)
let button = document.getElementById("clear")
button.addEventListener("click", function (event){

    event.preventDefault()
    clearInterval(interval)
})