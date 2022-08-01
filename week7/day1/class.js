// const arr = (x) =>{
//  let newArr = [];
//  arr.forEach(element => {
//     let newElement = element*2
//     newArr.push(newElement)
//  });
//  return newArr;
// }
// arr([1, 2, 3])

// const map = (arr) =>{
//     arr.forEach((item, i, arr) => {
//         arr[i] = item * 2
//     });
//     return arr
// }

// //map method
// let arr1 = [1, 2, 3, 4];
// let newArr1 = arr1.map((item, i) =>{
//     return item > 2
// })
// console.log(newArr1)
// // [3,4]

// let user = ['joe', 'anna', 'mary'];
// let userMail = user.map((item) =>{
//     return item +'@gmail.com'
// });
// console.log(userMail);

//filter method how to do without filter mothod
// let num = [0, 1, 2, 3, 4, 5]
// const allNum = (item) => {
//     let newArr = [];
//     num.forEach((e) => {
//         if (e > 3) {
//           newerArr.push(e);
//         }
//       });
//       return newerArr; }


// with filter method

// let num = [0, 1, 2, 3, 4, 5]
// let filter = num.filter((item, i) => item > 3)
// console.log(filter)

// const users = ['tim', 'john', 'sandy', 'sarah']
// let newUsers = users.filter((item) => {
//     return item.includes('sa')
// });
// console.log(newUsers);

// let startsSa = users.filter((item, i) => {
//     return item.startsWith('sa')

// });
// console.log(startsSa);


// let older26 = employees.filter(item => {
//     return item['age'] > 26
//   });

//reduce
// const num = [2, 5, 10, 100]

// const numSum = ((arr) => {
//     let sum = 0
//     arr.forEach(element => {
//         sum = sum+item
//     });
//     return sum;
// })
// console.log(numSum);

// let sum = num.reduce((total, item) =>{
//     return total + item
// })
// console.log(sum);

// let account = [{dollars:2}, {dollars:5},{dollars:10}, {dollars:100}];
// const accountSum = account.reduce((total, item) => {
//     return {dollars:(total.dollars + item.dollars)}
// });
// console.log(accountSum)

// const digits = (n) =>{
//     let num = String(n).split('');
//     let newNum = num.reduce((total, item) => {
//         return total + Number(item);
//     },0);
//     if (newNum < 10){
//         return newNum
//     }
//     return digits(newNum)
  
// }
// console.log(digits(789));

//clone an array
// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];

// arr2.push(5);

// console.log(arr);
// console.log(arr2);


//destructing

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];

// const [a,b,c,d] = arr;
// console.log(a,b);

//spread operator

// let arr1 = [5, 6, 7];
// let arr3 = [2,...arr1, 9, ...arr]
// console.log(arr3)

// function nums(...arr){
//     console.log(...arr);
// }
// nums([5, 6, 7])


//rest operator
//

//try catch errors in code

//this code will not work, because of second console.log, i is not defined
// for(let i = 0; i<6; i++){
//     console.log(i)
// }
// console.log(i);

try{
    for(let i = 0; i<6; i++){
        console.log(i)
    }
    console.log(i);
    
}
catch(error){
    console.log(error.name, error.message, error.stack)
}
console.log('continue with my code')

let b = 3, d = b, u = b;

const tree = ++d * d*b * b++ +
 + --d+ + +b-- +
 + +d*b+ +
 u

 console.log(tree);//163