import React from 'react';
import { NavLink } from 'react-router-dom'
import Spinner from 'react-spinkit';

const Header = ({loading}) => {
  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-menu">
        <NavLink to="/" className="navbar-item" activeClassName='active'>Home</NavLink>
        <NavLink to="/users" className="navbar-item" activeClassName='active'>Users</NavLink>
        <NavLink to="/about" className="navbar-item" activeClassName='active'>About</NavLink>
        {loading && <Spinner name='circle' color='black'/>}
      </div>
    </nav>
  );
};

export default Header;
