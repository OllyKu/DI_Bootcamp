// Part 1 : Quote Generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : 
// id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0,
//  the second quote the id 1, the third quote the id 3 ect…

// Populate the array with a few quotes that you like.

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row

let arrQoutes = [
    {
        id: 0,
        author:"Vernon Howard",
        quote:"You have succeeded in life when all you really want is only what you really need."
    },
    {
        id: 1,
        author:"Paul Cezanne",
        quote:"We live in a rainbow of chaos."
        },
    {
        id: 2,
        author:"George Bernard Shaw",
        quote:"Life isn't about finding yourself. Life is about creating yourself."
    },
    {
        id : 3,
        author : " Aristotle",
        quote : "It is during our darkest moments that we must focus to see the light."
    },
]
var current = 0
var previous = 0
const btn = document.getElementById('btn')
const btnP = document.getElementById('btn-previous')
const words = document.querySelector('#words')
const nameAuthor = document.querySelector('#name')
const lastOne = quotes[-1]

btn.addEventListener('click' , () => {
    if (current < quotes.length) {
        previous = current
        current = Math.floor(Math.random() * 8)
        console.log(current)
        console.log(previous)
        if (current === previous) {
            current = 0 
        }else {
            words.innerHTML = `"${quotes[current].quote}"`
            nameAuthor.innerHTML = `${quotes[current].author}`
            console.log(quotes[current].quote + quotes[current].author)
        }
    }else {
        current = 0
    }
})

btnP.addEventListener('click', () => {
    words.innerHTML = `"${quotes[previous].quote}"`
    nameAuthor.innerHTML = `${quotes[previous].author}`
})


const formBtn = document.querySelector('#btn-form')
var quoteBox = document.getElementById('quote-box')
var authorBox = document.getElementById('author-box')
var newQuote = {}
var i = 8

formBtn.addEventListener('click', (event) => {
    newQuote = {id:i, author: authorBox.value, quote: quoteBox.value}
    quotes.push(newQuote)
    console.log(quotes)
    authorBox.value = ""
    quoteBox.value = ""
    i++
    current++
    event.preventDefault()
})

formBtn.addEventListener('click', (event) => {
    newQuote = {id:i, author: authorBox.value, quote: quoteBox.value}
    quotes.push(newQuote)
    console.log(quotes)
    authorBox.value = ""
    quoteBox.value = ""
    i++
    current++
    event.preventDefault()
})

const btnSearch = document.getElementById('search-btn')
var searchBox = document.getElementById('search-input')

btnSearch.addEventListener('click', (event) => {
    var valueS = searchBox.value
    var searchIndex = quotes.indexOf(valueS)
    console.log(searchIndex)
    if (valueS in quotes) {
       console.log(quotes.indexOf(valueS)) 
    }
    event.preventDefault()
})