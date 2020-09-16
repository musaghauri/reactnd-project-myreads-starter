import React, { Component } from 'react'

class Book extends Component {
    // state = {
    //     options: [
    //         { value: '', label: 'Move to...' },
    //         { value: 'currentlyReading', label: 'Currently Reading' },
    //         { value: 'wantToRead', label: 'Want to Read' },
    //         { value: 'read', label: 'Read' },
    //         { value: 'none', label: 'None' },
    //     ]
    // }

    render() {
        // const { options } = this.state;
        const { handleCategoryChange, book } = this.props;
        const { imageLinks, title, authors, shelf, id } = book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(e) => handleCategoryChange(e, id)} name="category">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read.</option>
                            <option value="none" >None</option>
                            {/* {
                                options.map((option, optionI) => {
                                    return <option key={`${option.label}_${optionI}`} value={option.value} disabled={option.value === ""}>{option.label}</option>
                                })
                            } */}
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book
