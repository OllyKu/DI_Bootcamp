//Promises is a comlicated objects, an Prototype
//flipping a coin

const flip = () =>{
    let side = Math.floor(Math.random()*3) ;
    if(side === 0){
        return 'head'
    }else{
        return 'tail'
    }
}
console.log(flip())

// promise example
// new Promise((resolve, reject) =>{

// })

const flipCoin = new Promise((resolve, reject) =>{
    setTimeout(()=>{

        const res = flip();
        if(res){
            resolve()
        }else{
            reject()
        }
    }, 5*1000)

})
setInterval(()=>{
    console.log(flipCoin)

}, 1*1000)
// how to resolve the promise and recive a data
flipCoin.then((res)=>{
    // console.log(res)
    return res +'!'
})
.then(res1 =>{
    return res1 + '?'
})
.then(res2 => {
    console.log(res2)
})
//how to catch the an error in promise
.catch(e=>{
    console.log(e)
})

//exercise
//write a function that take a number as an argument
// and returns a Promise that tests if the value is less
// or greater than 10. value > 10 - resolve
// value < 10 - reject
// get the result from the Promise

const number = new Promise((resolve, reject) =>{
    let randomNum = (Math.random() * 100);
    if( randomNum> 10){
        resolve()
    }else(
        reject()
    )
})
console.log(number())

number.then((res) =>{
    return res
})
.catch((res) =>{
    console.log (res)
})

//exercise 2
/*

Write two functions that use Promises that you can chain!
The first function, makeAllCaps(),
will take in an array of words and capitalize them,
and then the second function, sortWords(),
will sort the words in alphabetical order.
If the array contains anything but strings,
it should throw an error.

['banna','apple','kiwi']

['banna',32,'kiwi']
*/
const makeAllCaps =(arr) =>{
    return new Promise ((res, rej)=>{
        let caps = arr.map(item =>{
            if(typeof item === 'string'){
                return item.toUpperCase()
            }else{
                reject('Error')
            }
        })
        res(caps)
    })
}
const sortWord = (arr) =>{
    return new Promise((res, rej) =>{
        if(arr){
            res(arr.sort())
        }
        else{
            rej('Error')
        }
    })
}
makeAllCaps(word2)
.then(res => {
    return sortWord(res)
})
.then(res => {
    console.log(res)
})
.catch(e =>{
    console.log(e)
})

//how to manage multiple Promises
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Result 1')
    }, 3*1000)
})
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Result 2')
    }, 5*1000)
})
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Result 3')
    }, 2*1000)
})

//Promise all
Promise.all([promise1, promise2, promise3])
.then(res => {
    console.log(res)
})
.catch(e =>{
    console,log(e)
})

// Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console,log(e)
})

//Promise.any
Promise.any([promise1, promise2, promise3])
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console,log(e)
})

//Promise.race
Promise.race([promise1, promise2, promise3])
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console,log(e)
})

// #5) Use Promise.all to fetch all of these people
// from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a
// catch block as well.
const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/'
  ]

// #6) Change one of your urls above to make it
// incorrect and fail the promise
// does your catch block handle it?