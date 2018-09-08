import React, { Component } from 'react';
import '../css/Header.css';
import '../css/font-awesome.css'

//componets
import Nav from './Nav.js'
class Header extends Component {
  constructor(props) {
    super(props);
    let valor = 0;
    if(typeof (localStorage.Cart) == "undefined"){
        valor = 0;
    }else{
        valor = JSON.parse(localStorage.Cart).length
    }
    this.state = {
        AmountCart: valor
    };
}
render() {
  return (
      <Nav AmountCart={this.state.AmountCart}></Nav>
  );
}
}

export default Header;