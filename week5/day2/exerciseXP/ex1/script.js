// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let h1 = document.getElementsByTagName("h1");
console.log(h1);

let article = document.querySelector("article");
article.lastElementChild.remove();

let h2 = document.querySelector("article>h2");
h2.addEventListener("click", function(){
    h2.style.background = "red"
});

let h3 = h2.nextElementSibling
h3.addEventListener("click", function (){
    document.querySelector("h3").style.display = "none"
});

let button = document.querySelector("button");
let allP = document.querySelectorAll("p");

button.addEventListener("click", function (){
    function toBold () {
        for (let i = 0; i < allP.length; i++) {
            allP[i].style.fontWeight = "bold"        
        };  
    }
    toBold()

})

