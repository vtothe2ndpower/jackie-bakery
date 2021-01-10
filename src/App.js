import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName="active-link" to="/">Jackie's Bakery</NavLink>
          <NavLink exact activeClassName="active-link" to="/about">About</NavLink>
          <NavLink exact activeClassName="active-link" to="/products">Products</NavLink>
          <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;