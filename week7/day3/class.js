// birthday cake candels
// Create a function that get an array of Candles
// You can blow only the tallest Candles
// let arr = [2, 4, 4, 1]
// return how many Candles you can blow

// let arr = [2, 4, 4, 1]

// const cake = (arr) => {
//     let maxNum = Math.max(...arr);
//     let filter = arr.filter(item => item === maxNum)
//     return filter.length;

// }
// console.log(cake(arr));

/* 
 itersection  function
*/
// let arr = ['1,2,5,6,7', '2,3,5,7,8,9'];
// const intersection = (arr) => {
//     let arr1 = arr[0].split(',') //this will give us an array of numbers
//     let arr2 = arr[1].split(',')
//     let ret = arr1.filter(value => {
//         return arr2.includes(value)
//     })
//     return ret;
//   };
//   console.log(intersection(arr))

/*
find the smallest distance between 2 numbers in an array
[2,5,3,7,2,3,6,8,6] => 2
*/

// let arr = [2,2,5,3,7,2,3,6,8,6];

// const minimumDistances = (arr) => {
//   let temp = [];
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] == arr[j]){
//         temp.push(j - i); //[1, 4, 2 ]
//       }
//     }
//   }
//   // temp = [1,4,2];
//   // 1,2,4
//   // [0]
//   return temp.sort()[0]
// }
// console.log(minimumDistances(arr));

// Advansed object methods

// const population ={
//     tokyo: 3256258,
//     delhi: 4564664,
//     shanghai: 8756419
// }
// console.log(population.delhi)

// for(x in population){
//     console.log(x) //x is a key
//     console.log(x, population[x])
// };

// // Object.keys retirn an array of the keys

// let keys = Object.keys(population);
// console.log(keys);

// keys.forEach((item) => {
//     console.log(item);
// });

// Object.values return the array values of the keys

// let values = Object.values(population);
// console.log(values)

// Object.values(population).forEach((item) => {
//     console.log(item)
// })

// //Object.enteries

// const enteries = Object.entries(population);
// console.log(enteries);

// //distracting an object
// enteries.forEach(([key, value]) =>{
//     console.log(key, value)
// })

// // Object.fronEntries. method allows you to convert a list of key-value pairs into an object quickly.
// //

// let p = Object.fromEntries(population);
// console.log(p)

// //clone objects
// // const newPopulation = [...population]
// // deep cloning
// let newPopulation = JSON.stringify(population)
// console.log(newPopulation)

// let a = JSON.parse(JSON.stringify(population));;
// console.log(a)
// a.shanghai.men = 1;
// console.log(population);

//merge between objects
// const population ={
//     tokyo: 3256258,
//     delhi: 4564664,
//     shanghai: 8756419
// }
// const population2 ={
//     tokyo: 3256258,
//     delhi: 4564664,
//     telaviv: 8756419
// }

// const population3 = {...population, ...population2} //it will overwrite the tokyo and dehli

// //Destructing an object
// const population4 ={
//     tokyo: 3256258,
//     delhi: 4564664,
//     shanghai: 8756419
// }

// // let tokyo = population.tokyo
// // let dehli = population.delhi
// // let shanghai = population.shanghai

// const {shanghai, delhi, tokyo} = population
// console.log(tokyo, delhi, shanghai)

//spreading 
// const population = {
//     tokyo: 3256258,
//     delhi: 4564664,
//     shanghai: 8756419
// }

// let population2 = {... population, tokyo:1, telaviv:5}

//Nested Object Destructing
// const population = {
//     tokyo: 3256258,
//     delhi: 4564664,
//     shanghai: {
//         women: 5456,
//         men: 465455
//     }
// }
// const {tokyo, shanghai:{women, men}} = population
// console.log(women, men)

// function dist({tokyo, delhi, shanghai:{women, men}}){
//     const {tokyo, delhi, shanghai:{women, men}} = obj;
//     console.log(tokyo, delhi, men, women)
// }
// dist(population)

// exercise

  
//   filter for all users older than 30
//   and store the data in an Array
//   use Array.filter Array.map
//   [
//     {id:'user1',age:44, name:'picard'},
//     {id:'user3',age:109, name:'janeway'},
//   ]

// let users = {
//     user1:{
//       age:44,
//       name:'picard'
//     },
//     user2: {
//       age:12,
//       name: 'sisko'
//     },
//     user3: {
//       age:109,
//       name: 'janeway'
//     }
//   }

//   const newUsers = Object.keys(users);
//   const adults = newUsers.filter(key => users[key].age > 30)
//   .map(id => ({id, ...users[id]}))
//   console.log(adults)

// class. a class have a constructor

class Animal {
    constructor(){
        this.name = 'Dog'
    }
}
let dog = new Animal()
console.log(dog)