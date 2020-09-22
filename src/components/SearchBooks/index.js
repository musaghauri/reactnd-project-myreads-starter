import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import BookSearchList from './BookSearchList';
import * as BooksAPI from '../../BooksAPI'


class SearchBooks extends Component {
    state = {
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
                <SearchInput 
                    onSearchChange={this.hanldeSearchChange} 
                />
                <BookSearchList
                    searchedBooks={searchedBooks}
                    books={books}
                    onCategoryChange={onCategoryChange}
                />
            </div>
        )
    }
}

SearchBooks.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
}

export default SearchBooks
