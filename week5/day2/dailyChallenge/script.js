let noun = document.getElementById("noun").value;
let adjective = document.getElementById("adjective").value;
let person = document.getElementById("person").value;
let verb = document.getElementById("verb").value;
let place = document.getElementById("place").value;
let btn = document.getElementById("lib-button").value;
let story = document.getElementById("story").value;

btn.addEventListener("click", getValue());

let elements = [noun, adjective, person, verb, place];

function getValue(e) {
  e.preventDefault();
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);

    if (elements[i].value.length === 0) {
      alert("Missing input text");
      break;
    }
  }

  let madLib = `${noun}  ${adjective}  ${person} ${verb}  ${place}`;
  story.append(madLib);
}