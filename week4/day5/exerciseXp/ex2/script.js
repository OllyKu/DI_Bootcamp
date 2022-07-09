// Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.
document.querySelector('div').style.backgroundColor ='lightblue'
document.querySelector('div').style.padding = "50px 10px 20px 30px";

// Do not display the <li> that contains the text node “John”.
document.querySelector('ul>li:first-child').style.display ='none'

// Add a border to the <li> that contains the text node “Pete”.
document.querySelector('ul>li:last-child').style.border = "2px solid black"

// Change the font size of the whole body.
document.querySelector("body").style.fontSize = "50px"


