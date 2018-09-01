import React, { Component } from 'react';
import './Global/css/App.css';

//Components
import Header from './Global/Header/Header'
import Cart from './Cart/Cart.js'
import Footer from './Global/Footer/Footer'

class App extends Component {
  render() {
    return (
    <div>
        <Header></Header>
        <Cart></Cart>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;
