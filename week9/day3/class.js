// fetch
//fetch(url,) first argunet is requered
fetch(url) // passing the url of the API as a parameter
.then(function() {
    // Handle the data from the API
})
.catch(function() {
    // Handle any errors
});

const f = fetch(url)
//Response provides multiple promise-based methods to access the body in various formats:

// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object,

/*
console.log("Starting ...")


const func = () => {
    console.log("Working ...")
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
        .then((resp) => resp.json()) //return a promise
        .then((resp) => 
              console.log(`The hour of the sunrise in Tel Aviv is:
              ${resp.results.sunrise}`))
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}


func()
*/
//  let obj ={
    
//  }

// await
/*
function getToken() {
  return new Promise(x => {
    window.localStorage.getItem("token")
  });
}

async function case1() {
  var x = await getToken();
  console.log(x)
}

case1();

*/