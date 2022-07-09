// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
let allBooks = [{bookOne :{title:"One", author:"OneOne", image:URL, alreadyRead: true}},
                {bookTwo:{title:"Two", author:"TwoTwo", image:URL, alreadyRead: false}}];

//Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:

// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
function generate_table() {
    // creates a <table> element and a <tbody> element
     const tbl = document.createElement("table");
     const tblBody = document.createElement("tbody");
   
     // creating all cells
     for (let i = 0; i < 2; i++) {
       // creates a table row
       const row = document.createElement("tr");
   
       for (let j = 0; j < 2; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         const cell = document.createElement("td");
         const cellText = document.createTextNode(allBooks[0][0]);
         cell.appendChild(cellText);
         row.appendChild(cell);
       }

       // add the row to the end of the table body
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <div>
     document.querySelector('#listBooks').append(tbl)
     // sets the border attribute of tbl to '2'
     tbl.setAttribute("border", "2");
   }