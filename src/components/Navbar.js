import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/">
            Jackie's Bakery
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/about">
            About
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/products">
            Products
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/contact">
            Contact
        </NavLink>
      </div>
    )
  }
}

export default Navbar;
