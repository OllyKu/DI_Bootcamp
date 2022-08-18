/* 
Instructions
Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

*/
function displayGif() {
    let search = document.querySelector("#search");
    let add = document.querySelector("#submit");
    let deleteAll = document.querySelector("#deleteall");
    let gif = new XMLHttpRequest();
    gif.open(
      "GET",
      `https://api.giphy.com/v1/gifs/search?q=hilarious&limit=25&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    gif.responseType = "json";
    gif.send();
    gif.onload = function () {
      if (gif.status != 200) {
        console.log("error status");
      } else {
        console.log("Finished Loading");
        console.log(gif.response);
        attach(gif.response);
      }
    };
    function attach() {
      add.addEventListener("click", addgif);
      deleteAll.addEventListener("click", deletegifs); // adds event listeners to our two buttons
    }
  
    function deletegifs() {
      let container = document.querySelector(".container");
      container.innerHTML = ""; // empties the container, basically removes all gifs and buttons
    }
  
    function addgif(e) {
      console.log(gif.response);
      gif.open(
        "GET",
        `https://api.giphy.com/v1/gifs/search?q=${search.value}&limit=50&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
      );
      gif.send();
      gif.onload = function () {
        let container = document.querySelector(".container");
        let img = document.createElement("img");
        let xbtn = document.createElement("button");
        xbtn.setAttribute("type", "button");
        xbtn.innerText = "X";
        xbtn.addEventListener("click", x);
        container.append(xbtn);
        img.setAttribute(
          "src",
          gif.response.data[Math.floor(Math.random() * 51)].images.downsized.url // randomizes the gifs
        );
        container.append(img);
        function x() {
          // Removes the button and gif
          img.remove();
          xbtn.remove();
        }
      };
    }
  }
  displayGif();