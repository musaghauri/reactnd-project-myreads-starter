import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


class SearchInput extends Component {
    state = {
        searchValue: ''
    }


    hanldeSearchChange = (e) => {
        const { value } = e.target;
        this.setState({
            searchValue: value
        }, () => this.props.onSearchChange(value));

    }

    render() {
        const { searchValue } = this.state;
        return (
            <div className="search-books-bar">
                <Link to="/"><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={this.hanldeSearchChange}
                        value={searchValue}
                    />
                </div>
            </div>
        )
    }
}

SearchInput.propTypes = {
    onSearchChange: PropTypes.func.isRequired
}

export default SearchInput;
