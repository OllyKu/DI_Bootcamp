// Exercise 1 : Users
// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
console.log(document.body.firstChild)
// Change the name “Pete” to “Richard”.
document.body.children[1].children[1].textContent = "Richard"
// Change each first name of the two <ul>'s to your name.
document.querySelectorAll('ul>li:first-child').forEach((el)=>{el.textContent="Olga";})
// Delete the <li> that contains the text node “Sarah”.
document.body.children[2].children[1].remove()
// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// let newClass = document.getElementsByClassName("list")
// newClass.classList.add("student_list")
// Add the classes university and attendance to the first <ul>.
const list = document.body.children[1].classList;
list.add("university", "attendance");