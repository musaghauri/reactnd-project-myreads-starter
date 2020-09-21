import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Book from '../Home/Shelves/BookList/Book'
import * as BooksAPI from '../../BooksAPI'


class Search extends Component {
    state = {
        searchValue: '',
        searchedBooks: [],
    }

    hanldeSearchChange = (value) => {
        BooksAPI.search(value).then(books => {
            if (!books) {
                this.setState({ searchedBooks: [] })
            }
            else { this.setState({ searchedBooks: books }) }
        });
    }

    render() {
        const { searchedBooks } = this.state;
        const { books, onCategoryChange } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.hanldeSearchChange(e.target.value)} />
                    </div>
                </div>
                <div className="bookshelf-books mt-5">
                    <ol className="books-grid">
                        {
                            searchedBooks.length > 0 ? (
                                searchedBooks.map((book, bookI) => {
                                    const { id: bookId } = book;
                                    let shelf = 'none'
                                    books.filter(book => {
                                        if (book.id === bookId) {
                                            shelf = book.shelf
                                            return
                                        }
                                    })
                                    return (
                                        <li key={`${bookId}_${bookI}`}>
                                            <Book
                                                shelf={shelf}
                                                onCategoryChange={onCategoryChange}
                                                {...book}
                                            />
                                        </li>
                                    );
                                })
                            ) : <span></span>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
