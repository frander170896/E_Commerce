import React, { Component } from 'react';
import '../css/Header.css';
import '../css/font-awesome.css'

//componets
import Nav from './Nav.js'
class Header extends Component {
  render() {
    return (
       <Nav></Nav>
    );
  }
}

export default Header;