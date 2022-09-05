// console.log('Hello');
// const module = require ('module');
// import module from 'module';//ES6

//module system
//1. built in module - fs, http
//2. npm/yarn modules -somebody built it for us and we can download it
//3. self write module

// const name = 'Mike Taylor';

// const greeting =(value) =>{
//     console.log(`hello ${value}, welcome to Node js`)
// };
// greeting(name);

// import slugify from 'slugify';
// console.log(slugify('my web site'));

const axios = require('axios');
const getUsers = async () =>{
    try{
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
    }
    catch(e){
        console.log(e)
    }
};
getUsers();