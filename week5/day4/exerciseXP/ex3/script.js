// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
//  Check out the Course Notes named DOM animations.

// getting the containers
let  big = document.querySelector("#target") 
let  small = document.querySelector("#box") 

function allowDrop(e) {
    console.log(e)
    e.preventDefault();
  }
  
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    smallOne.style.marginTop = "0px"
    e.target.appendChild(document.getElementById(data));
  }





big.addEventListener(`drop`,drop) 
big.addEventListener(`dragover`,allowDrop)
small.addEventListener(`dragstart`,drag)