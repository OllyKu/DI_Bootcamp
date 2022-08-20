// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(),
// will take in an array of words and capitalize them,and then the second function,
// sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
let words = ['banna','apple','kiwi']
let word2 = ['banna',32,'kiwi']

const makeAllCaps = (arr) => {
  return new Promise((res, rej)=>{
    let caps = arr.map(item => {
      if(typeof item === 'string'){
        return item.toUpperCase()
      }
      else{
        rej('Error, At least one item id not a string')
      }
    })
    res(caps)
  })
}

const sortWords = (arr) => {
  return new Promise((res, rej)=>{
    if(arr){
      res(arr.sort())
    }
    else {
      rej('Error, can not sort')
    }
  })
}
makeAllCaps(words)
.then(res => {
  return sortWords(null)
})
.then(res => {
  console.log(res);
})
.catch(e => {
  console.log(e);
})