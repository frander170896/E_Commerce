import React, { Component } from 'react';
import './Global/css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Header from './Global/Header/Header'
import Cart from './Cart/Cart.js'
import Footer from './Global/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Router>
    <div>
        <Header></Header>
        <Cart></Cart>
        <Footer></Footer>
    </div>
    </Router>
    );
  }
}

export default App;
