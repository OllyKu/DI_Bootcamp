function generate_table() {
    let div = document.getElementsByClassName("maintable")[0];
    for (let i = 0; i < 1680; i++) {
        let canvas = document.createElement('div')
        canvas.setAttribute('class', 'table')
        div.appendChild(canvas)
    };
};
generate_table();

let canvas = document.getElementsByClassName('table')
let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function(){
    for (let i = 0; i < canvas.length; i++) {
        canvas[i].style.backgroundColor = `white`
    }
});

let body = document.getElementsByTagName("body")[0];
let colorsSideBar = document.querySelectorAll("#sidebar > *");
let color = null;
let mousedown = false;

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){ 
    mousedown = false;
})


for (element of colorsSideBar){
    element.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

let colorsMainTable = document.querySelectorAll(".maintable > *");

for (elenemt of colorsMainTable){
    elenemt.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    elenemt.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
