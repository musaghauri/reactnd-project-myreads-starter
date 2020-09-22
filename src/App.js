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

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  handleCategoryChange = (e, id) => {
    const { value: categoryValue } = e.target
    console.log({ categoryValue })
    let { books } = this.state
    const BOOKS = books.map(book => {
      if (book.id === id) book["shelf"] = categoryValue
      return book
    });

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
              <SearchBooks books={books} onCategoryChange={this.handleCategoryChange}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
