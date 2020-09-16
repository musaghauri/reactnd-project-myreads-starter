import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
    render() {
        const { books, handleCategoryChange } = this.props;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books && books.map((book, bookI) => {
                            return (
                                <li key={`${book.title}_${bookI}`}>
                                    <Book
                                        book={book}
                                        handleCategoryChange={handleCategoryChange}
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

export default BookList
