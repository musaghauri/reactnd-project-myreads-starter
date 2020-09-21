import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Select from './Select'

const options = [
    { value: '', label: 'Move to...', disabled: true },
    { value: 'currentlyReading', label: 'Currently Reading', disabled: false },
    { value: 'wantToRead', label: 'Want to Read', disabled: false },
    { value: 'read', label: 'Read', disabled: false },
    { value: 'none', label: 'None', disabled: false },
]

class Book extends Component {
    render() {
        const { onCategoryChange, imageLinks, title, authors, shelf, id } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <Select 
                            onChangeHanlder={(e) => onCategoryChange(e, id)}
                            selected={shelf}
                            options={options}
                            name="category"
                        />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object,
    onCategoryChange: PropTypes.func,
}

export default Book
