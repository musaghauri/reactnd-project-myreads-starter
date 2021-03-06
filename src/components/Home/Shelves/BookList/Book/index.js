import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectBookCategory from './SelectBookCategory';

const options = [
    { value: '', label: 'Move to...', disabled: true },
    { value: 'currentlyReading', label: 'Currently Reading', disabled: false },
    { value: 'wantToRead', label: 'Want to Read', disabled: false },
    { value: 'read', label: 'Read', disabled: false },
    { value: 'none', label: 'None', disabled: false },
];

class Book extends Component {
    render() {
        const { onCategoryChange, book } = this.props;
        const { imageLinks, title, authors, shelf } = book;
        const imageStyles = {
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : 'no_image.png'})`
        };
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={imageStyles}></div>
                    <div className="book-shelf-changer">
                        <SelectBookCategory
                            onChangeHanlder={(e) => onCategoryChange(e, book)}
                            selected={shelf}
                            options={options}
                            name="category"
                        />
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">
                    {
                        !!authors ?
                            authors.join(", ")
                            :
                            'No Author'
                    }
                </div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onCategoryChange: PropTypes.func.isRequired
}

export default Book;
