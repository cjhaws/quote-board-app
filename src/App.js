import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          Quote Board...3
        </p>
        <a href="/Menu.js">Menu</a>

        <Menu/>

      </div>
    );
  }
}

export default App;
