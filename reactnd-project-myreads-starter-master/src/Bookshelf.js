import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Bookshelf extends Component{
    // updateBooks (book,shelf){
    //   this.props.update(book,shelf);
    // }
render () {
  return(
    <div>
     
                     <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.titleOfShelf}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                            {this.props.books.map((book)=>{
                            return(
                        <div>
                            {book.shelf == "currentlyReading" && (
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( "${book.imageLinks.thumbnail}")` }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={(event) =>this.props.updateBook(book, event.target.value)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                            )}  
                            </div>
                        )}
                        )} 
                        </ol>
                        </div>
        </div>
        <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.titleOfShelf}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.props.books.map((book)=>{
                            return(
                        <div>
                            {book.shelf === "wantToRead" && (
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( "${book.imageLinks.thumbnail}")` }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={(event) =>this.props.updateBook(book, event.target.value)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                            )}  
                            </div>
                        )}
                        )} 
                        </ol>
                        </div>
        </div>

        <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.titleOfShelf}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {this.props.books.map((book)=>{
                            return(
                                <div>
                                {book.shelf === "read" && (
                                <li>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( "${book.imageLinks.thumbnail}")` }}></div>
                                            <div className="book-shelf-changer">
                                                <select  onChange={(event) =>this.props.updateBook(book, event.target.value)}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                )}  
                                </div>
                            )}
                            )} 
                            </ol>
                            </div>
        </div>
        

</div>


  )}
}
export default Bookshelf
