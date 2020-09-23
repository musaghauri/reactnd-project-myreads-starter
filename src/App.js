import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import SearchBooks from './components/SearchBooks'

import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  handleCategoryChange = (e, selectedBook) => {
    const { id } = selectedBook;
    const { value: categoryValue } = e.target
    let { books } = this.state
    let isFound = false
    let BOOKS = books.map(book => {
      if (book.id === id) {
        isFound = true
        book["shelf"] = categoryValue
      }
      return book
    });
    if(!isFound) {
      selectedBook['shelf'] = categoryValue
      BOOKS.push(selectedBook)
    }
    this.setState({ books: BOOKS }, () => {
      BooksAPI.update({ id }, categoryValue)
    });
  }

  render() {
    const { books } = this.state;
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact >
              <Home books={books} onCategoryChange={this.handleCategoryChange} />
            </Route>
            <Route path="/search" >
              <SearchBooks books={books} onCategoryChange={this.handleCategoryChange} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
