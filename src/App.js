import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import Search from './components/Search'

import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/search" >
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
