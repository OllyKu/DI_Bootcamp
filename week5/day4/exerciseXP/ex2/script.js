// Exercise 2 : Move The Box
// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> 
// to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
function myMove(){
    let box = document.getElementById('animate');
    let position = 0;
    let id = setInterval(function(){
      if(position == 350){
        clearInterval(id)
      }
      else{
        position++
        box.style.left = position + "px";
        
      }
  
    },1)
  }