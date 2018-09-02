import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
                <li className="nav-item m-auto">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="category.html">Categories</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Products">Products</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/cart">Cart <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about_us">About us</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Menu;
