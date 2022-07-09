// Exercise 3 : Change The Navbar
// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navBar = document.querySelector('#navBar')
.id = "socialNetworkNavigation"
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li')
// Create a new text node with “Logout” as its specified text.
let textNode =  document.createTextNode("Logout")
// Append the text node to the newly created list node (<li>).
newLi.append(textNode)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
document.querySelector('#socialNetworkNavigation>ul').append(newLi)

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).
let firstListChild = document.querySelector('#socialNetworkNavigation>ul').firstElementChild 
let lastChild = document.querySelector('#socialNetworkNavigation>ul').lastElementChild  
console.log(firstListChild.textContent )
console.log(lastChild.textContent )

