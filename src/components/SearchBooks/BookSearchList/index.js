import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../../Home/Shelves/BookList/Book';


class BookSearchList extends Component {
    render() {
        const { searchedBooks, books, onCategoryChange  } = this.props;
        return (
            <div className="bookshelf-books mt-5">
                {searchedBooks.error && <div className="error">No Books Available</div>}
                <ol className="books-grid">
                    {
                        searchedBooks.length > 0 ? (
                            searchedBooks.map((book, bookI) => {
                                const { id: bookId } = book;
                                let shelf = 'none'
                                const isBookFound = books.filter(book => book.id === bookId);
                                if(isBookFound.length > 0) shelf = isBookFound[0].shelf;
                                return (
                                    <li key={`${bookId}_${bookI}`}>
                                        <Book
                                            onCategoryChange={onCategoryChange}
                                            book={Object.assign({ shelf }, book)}
                                        />
                                    </li>
                                );
                            })
                        ) : <span></span>
                    }
                </ol>
            </div>
        );
    }
}


BookSearchList.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    searchedBooks: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    books: PropTypes.array.isRequired
}


export default BookSearchList;
