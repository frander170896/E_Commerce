import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
                <li className="nav-item m-auto">
                    <a className="nav-link active" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Products">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/categorias">Categories</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/about_us">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Register">Register</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Menu;
