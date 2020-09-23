import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const SHELVES = [
    {
        categoryName: 'Currently Reading',
        categoryValue: 'currentlyReading',
    },
    {
        categoryName: 'Want to Read',
        categoryValue: 'wantToRead',
    },
    {
        categoryName: 'Read',
        categoryValue: 'read',
    }
];

class Shelves extends Component {
    render() {
        const { onCategoryChange, books } = this.props;
        return (
            <div className="list-books-content">
                {
                    SHELVES.map(shelf => {
                        return (
                            <div className="bookshelf" key={shelf.categoryName}>
                                <h2 className="bookshelf-title">{shelf.categoryName}</h2>
                                <BookList
                                    books={books.filter(book => book.shelf === shelf.categoryValue)}
                                    onCategoryChange={onCategoryChange}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

Shelves.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
}

export default Shelves;
