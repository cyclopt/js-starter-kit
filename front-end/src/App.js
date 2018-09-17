import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import UsersPage from './components/users/UsersPage';
import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default App;
