import React, { Component } from 'react'
import { Link } from "react-router-dom";
import BookList from '../Home/Shelves/BookList'
import * as BooksAPI from '../../BooksAPI'


class Search extends Component {
    state = {
        searchValue: '',
        searchedBooks: []
    }

    hanldeSearchChange = (value) => {
        BooksAPI.search(value).then(books => {
            console.log({books})
            if (!books) {
                this.setState({ searchedBooks: [] })
            }
            else { this.setState({ searchedBooks: books }) }
        });
    }

    handleCategoryChange = (e, id) => {
        const { value: categoryValue } = e.target
        BooksAPI.update({ id }, categoryValue)
    }

    render() {
        const { searchedBooks } = this.state;
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
                {
                    searchedBooks.length > 0 ? (<BookList
                        books={searchedBooks}
                        handleCategoryChange={this.handleCategoryChange}
                    />) : <span></span>
                }
            </div>
        )
    }
}

export default Search
