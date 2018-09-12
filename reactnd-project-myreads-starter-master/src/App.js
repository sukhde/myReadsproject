import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from'./SearchBook.js'
import Books from './Books'
import './App.css'
import Bookshelf from './Bookshelf.js';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false,
    }

   getMyBooks(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log(books)
    })
}

componentDidMount() {
  this.getMyBooks()
} 
  whenUpdateBooks = (myBook, myShelf )=>{
    BooksAPI.update(myBook, myShelf).then(() => {
      this.getMyBooks();
    }
    )
    }

  render() {
    return (
      
      <div className="app">
       
          
              <div>
                <Route exact path="/" render={()=><Books exact path="/" update={this.whenUpdateBooks} books={this.state.books} />}/>
              </div>
              <Route  path='/search' render={()=>
              <SearchBook changeShelf={this.whenUpdateBooks} theBooks={this.state.books}/>
              }/> 
          
            </div> 
        )}
       }


export default BooksApp



























