import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import UsersPage from './components/users/UsersPage';
import Header from './components/common/Header';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadUsers} from './actions/userActions';
import ManageUserPage from './components/users/ManageUserPage';

const store = configureStore();
store.dispatch(loadUsers());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/user/:id?" component={ManageUserPage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
