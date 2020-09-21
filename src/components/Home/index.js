import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Shelves from './Shelves'
import SearchButton from './SearchButton'

class Home extends Component {

    render() {
        const { books, onCategoryChange } = this.props;
        return (
            <div className="list-books">
                <Header />
                <Shelves books={books} onCategoryChange={onCategoryChange} />
                <SearchButton />
            </div>
        )
    }
}

Home.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
}

export default Home
