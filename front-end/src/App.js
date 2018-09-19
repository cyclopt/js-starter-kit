import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import UsersPage from './components/users/UsersPage';
import Header from './components/common/Header';
import ManageUserPage from './components/users/ManageUserPage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header loading={this.props.loading}/>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/user/:id?" component={ManageUserPage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </Router>
    );
  }
}


App.propTypes = {
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
