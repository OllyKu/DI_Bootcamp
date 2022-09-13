const fs = require('fs');
//read file
// console.log('before')
// fs.readFile('./name.txt','utf-8', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(JSON.parse(data))
//     }
// })
// console.log('after');

// const f = fs.readFileSync('./name');
// console.log(f.toString());

//write file
const arr = [
    {name:'OLga'},
    {name:'Vlad'}
]
// fs.writeFile("./name1", JSON.stringify(arr), err =>{
//     if (err){
//         console.log(err)
//     }
// })

fs.appendFile("./name1",'5 6 7 8', err =>{
    if(err){
        console.log(err)
    }
})