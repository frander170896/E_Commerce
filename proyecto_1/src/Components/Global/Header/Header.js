import React, { Component } from 'react';
import '../css/Header.css';
import '../css/font-awesome.css'

//componets
import Nav from './Nav.js'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AmountCart: JSON.parse(localStorage.Cart).length
    };
}
render() {
  return (
      <Nav AmountCart={this.state.AmountCart}></Nav>
  );
}
}

export default Header;