import React, { Component } from 'react'
import Header from './Header'
import Shelves from './Shelves'
import SearchButton from './SearchButton'

import * as BooksAPI from '../../BooksAPI'

class Home extends Component {
    state = {
        shelves: [
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
        ],
        books: []
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
    }
    
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            console.log({ books })
            this.setState({ books })
        });
    }

    handleCategoryChange = (e, id) => {
        const { value: categoryValue } = e.target
        BooksAPI.update({ id }, categoryValue).then(resp => {
            BooksAPI.getAll().then(books => {
                this.setState({ books })
            });
        })
    }

    render() {
        const { shelves, books } = this.state;
        return (
            <div className="list-books">
                <Header />
                <Shelves shelves={shelves} handleCategoryChange={this.handleCategoryChange} books={books} />
                <SearchButton />
            </div>
        )
    }
}

export default Home
