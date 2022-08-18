//api
//ajax
//fetch is a promise (?)
//how to fetch data with XML http Request
// create XMLHTttpRequest

let xhr = new XMLHttpRequest();
// initialize our xhr
xhr.open(method, URL, [async, user, password])

// method - get post delete, url where you send a request

xhr.send([body])

// xhr.abord

//set the timeout of the response
// xhr.timeout = 100000; //10 sec
//set the response type

xhr.responseType = 'json'


xhr.onload = function(){
    if(xhr.status != 200){
        console.log(xhr.status + ' error ' + xhr.statusText)
    }
    console.log(JSON.parse(xhr.response));
}

xhr.onprogress = function(event){
    console.log(event.loaded + " " + event.total)
}

xhr.onerror = function(){

}