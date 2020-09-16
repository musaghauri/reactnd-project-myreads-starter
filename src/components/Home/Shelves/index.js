import React, { Component } from 'react'
import BookList from './BookList'

class Shelves extends Component {
    render() {
        const { shelves, handleCategoryChange, books } = this.props;
        return (
            <div className="list-books-content">
                {
                    shelves.map((shelf, shelfI) => {
                        return (
                            <div className="bookshelf" key={`${shelf.category}_${shelfI}`}>
                                <h2 className="bookshelf-title">{shelf.categoryName}</h2>
                                <BookList
                                    books={books.filter(book => book.shelf === shelf.categoryValue)}
                                    handleCategoryChange={handleCategoryChange}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Shelves
