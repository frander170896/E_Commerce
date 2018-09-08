import React, { Component } from 'react';
import '../css/Header.css';
import '../css/font-awesome.css'

//componets
import Nav from './Nav.js'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AmountCart: localStorage.Cart?JSON.parse(localStorage.Cart).length:null
    };
}
render() {
  return (
      <Nav AmountCart={this.state.AmountCart}></Nav>
  );
}
}

export default Header;