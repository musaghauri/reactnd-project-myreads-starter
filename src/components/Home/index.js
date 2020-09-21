import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Shelves from './Shelves'
import SearchButton from './SearchButton'

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
        ]
    }

    render() {
        const { shelves } = this.state;
        return (
            <div className="list-books">
                <Header />
                <Shelves shelves={shelves} {...this.props} />
                <SearchButton />
            </div>
        )
    }
}

Home.propTypes = {
    onCategoryChange: PropTypes.func,
    books: PropTypes.array,
}

export default Home
