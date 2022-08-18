/* 
Instructions
Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

*/
// https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
let xhr = new XMLHttpRequest();
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

let root = document.getElementById('root');

xhr.onload = function(){
  if(xhr.status != 200){
    alert(`Error ${xhr.status} - ${xhr.statusText}`)
  }
  else {
    showImg(xhr.response.data);
  }
}

document.getElementById('myForm').addEventListener('submit',function(event){
  event.preventDefault()
  submitForm();
})

document.getElementById('erase').addEventListener('click',function(){
  root.innerHTML = ''
})


function submitForm(){
  const input = document.getElementById('search').value;
  let url = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${API_KEY}&limit=1&offset=${getRandom()}`;
  xhr.open('GET',url);
  xhr.responseType = 'json';
  xhr.send();
}

function getRandom(num = 50){
  return Math.floor(Math.random()*50)
}

function showImg(arr) {
  let div = document.createElement('div');
  let img = document.createElement('img');
  let btn = document.createElement('button');

  div.style.display = 'inline-block';

  img.setAttribute('src', arr[0].images.fixed_width.url);
  img.style.width = '120px';
  div.appendChild(img);

  btn.textContent = 'X';
  btn.addEventListener('click', function(){
    root.removeChild(div);
  })
  div.appendChild(btn);

  root.appendChild(div)
}