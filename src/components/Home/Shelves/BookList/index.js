import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends Component {
    render() {
        const { books, onCategoryChange } = this.props;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books && books.map((book, bookI) => {
                            return (
                                <li key={`${book.title}_${bookI}`}>
                                    <Book
                                        book={book}
                                        onCategoryChange={onCategoryChange}
                                    />
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}


BookList.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
}

export default BookList;
