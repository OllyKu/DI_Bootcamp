import React from 'react'
import './App.css';
import books from './books.json'
import Book from './components/Book'

// function App() {
//   console.log(books.books);
class App extends React.Component{
  constructor(){
        super()
        this.state = {
          arr:[],
          stores:[],
          title: 'My Book Shop'
        }
       console.log('constructor')
    }
  getStore = () =>{
    fetch('https://logical-calf-89.hasura.app/api/rest/stores')
    .then(res=>res.json())
    .then(data => {
      console.log(data.stores);
      this.setState({stores:data.stores})
    })
  }
  getBooks =() =>{
      console.log(books.books);
      this.setState({title:"New book", arr:books.books})
      fetch('https://logical-calf-89.hasura.app/api/rest/books')
      .then(res=>res.json())
      .then(data => {
        console.log(data.books);
        this.setState({arr:data.books})
      })
      .catch(e => {
        console.log(e)
      })
    }

  componentDidMount(){
      console.log('componentDidMount');
      this.setState({title:"New book", arr:books.books})
      fetch('https://logical-calf-89.hasura.app/api/rest/books')
      .then(res=>res.json())
      .then(data => {
        console.log(data.books);
        this.setState({arr:data.books})
      })
      .catch(e => {
        console.log(e)
      })
    }

  render(){
    console.log('render')
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.getBooks}>Get My Book</button>
        <div>
          {
            this.state.stores.map(item =>{
              return(
                <div>
                  {item.name}
                </div>
              )
            })
          }
        </div>
        {
          this.state.arr.map(item=>{
            return(
              <div>
                <Book book={item} key={item.id}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}



export default App;
