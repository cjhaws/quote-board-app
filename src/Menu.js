import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  render() {
    return (
      <div className="flex-start">

      <div className="main-menu-style">
      <ul className="menu-position">
        <li>Login / Sign Up</li>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Favorite Quotes</li>
        <li>FAQ</li>

      </ul>
      </div>

      </div>
    );
  }
}

export default Menu;
