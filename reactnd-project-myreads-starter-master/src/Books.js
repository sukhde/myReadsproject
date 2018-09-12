import React,{Component} from 'react';
import Bookshelf from './Bookshelf.js';
import {Link} from 'react-router-dom';

class Books extends Component{
render () {
  var currentlyReading = this.props.books.filter((book)=> book.shelf === 'currentlyReading')
  var wanttoread = this.props.books.filter((book)=> book.shelf === 'wantToRead')
  var read = this.props.books.filter((book)=> book.shelf === 'read')
  return(
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
    <Bookshelf books = {currentlyReading} updateBook={this.props.update} titleOfShelf="Currently Reading"/>
    <Bookshelf books = {wanttoread} updateBook ={this.props.update} titleOfShelf="Want To Read"/>
    <Bookshelf books = {read} updateBook = {this.props.update} titleOfShelf="Read"/>
    </div>
    
    <div className="open-search">
    <Link to="/search">Add a book</Link>
    </div>
    </div>
    
)
}}
export default Books;