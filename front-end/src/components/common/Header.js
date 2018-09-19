import React from 'react';
import { NavLink } from 'react-router-dom'
import Spinner from 'react-spinkit';

const Header = ({loading}) => {
  return (
    <nav>
      <NavLink to="/" activeClassName='active'>Home</NavLink>
      {" | "}
      <NavLink to="/users" activeClassName='active'>Users</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName='active'>About {loading}</NavLink>
      {loading && <Spinner name='circle' color='black'/>}
    </nav>
  );
};

export default Header;
