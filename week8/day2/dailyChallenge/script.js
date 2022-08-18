/* 
Instructions
Create a form with two fields (name, last name) and a submit button.
When you click the Send button, send the data as JSON.
The output should be:
*/
let form = document.querySelector('form')
form.addEventListener('submit', sd);

const sd = (e)=>{
    e.preventDefault()
    let data  = new FormData(e.target);
    let obj = {}
    for (var key of data.keys()) {
		obj[key] = data.get(key);
	}
    console.log(JSON.stringify(obj))
    
}