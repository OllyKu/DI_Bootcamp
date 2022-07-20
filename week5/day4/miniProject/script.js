function generate_table() {
    let div = document.getElementsByClassName("maintable")[0];
    for (let i = 0; i < 1680; i++) {
        let canvas = document.createElement('div')
        canvas.setAttribute('class', 'table')
        div.appendChild(canvas)
    };
};
generate_table();

let body = document.getElementsByTagName("body")[0];
let colorsSideBar = document.querySelectorAll("#sidebar > *");
let colorsMainTable = document.querySelectorAll("#maintable > *");
let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function(){
    for ( block of colorsMainTable){
        block.style.backgroundColor = "white";
    }
});

let color = null;
let mousedown = false;
