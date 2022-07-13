// Exercise 3 : Transform The Sentence
// Instructions

// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems = [];
let getBold_items = () =>{
    for (let i = 0; i < p.children.length; i++) {
        if (p.children[i].tagName == "strong"){
            allBoldItems.push(p.children[i])
        }    
       }
       console.log(allBoldItems)
}
p.addEventListener("mouseover", function(){
        for (let i = 0; i < allBoldItems.length; i++) {
            allBoldItems[i].style.color = "blue"
            
        }
})

p.addEventListener("mouseout", function(){   
        for (let i = 0; i < allBoldItems.length; i++) {
            allBoldItems[i].style.color = "black"
            
        }
})