let form = document.getElementById("MyForm");
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
function calculateVolume(){
    radius.value = Number(radius.value)
    let Volume = 4 * Math.PI * (Math.pow(radius.value , 3)) / 3;
    
    return Volume;  
 
 }