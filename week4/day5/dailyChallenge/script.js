// in this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

planets.forEach(element => {
    let planetsDiv = document.createElement('div');
    planetsDiv.setAttribute("class", element)
    planetsDiv.classList.add('planet') //This div should have a class named "planet".
    document.getElementsByClassName('listPlanets')[0].appendChild(planetsDiv) //adding our divs in section class = "listPlanets"
    let planetName = document.createTextNode([element]);// adding text to ours planets
    document.getElementsByClassName(element)[0].appendChild(planetName)
});

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
document.getElementsByClassName('Mercury')[0].style.backgroundColor = "#ff6961";
document.getElementsByClassName('Venus')[0].style.backgroundColor = "#ffb480";
document.getElementsByClassName('Earth')[0].style.backgroundColor = "#6781EB";
document.getElementsByClassName('Mars')[0].style.backgroundColor = "#f8f38d";
document.getElementsByClassName('Jupiter')[0].style.backgroundColor = "#42d6a4";
document.getElementsByClassName('Saturn')[0].style.backgroundColor = "#08cad1";
document.getElementsByClassName('Uranus')[0].style.backgroundColor = "#59adf6";
document.getElementsByClassName('Neptune')[0].style.backgroundColor = "#9d94ff";
document.getElementsByClassName('Pluto')[0].style.backgroundColor = "#c780e8";

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
let moons = { Mercury: 0, Venus: 0, Earth: 1, Mars: 2, Jupiter: 53, Saturn: 53, Uranus: 27, Neptune: 14, Pluto: 6 }

Object.keys(moons).forEach(num => {
    if (moons[num] > 0) {
        let moonsDiv = document.createElement('div');
        moonsDiv.setAttribute('class', num + "moon");
        moonsDiv.classList.add('moon')
        document.getElementsByClassName(num)[0].appendChild(moonsDiv)
        let text = document.createTextNode(moons[num]);
        document.getElementsByClassName(num + 'moon')[0].appendChild(text)
    }
});