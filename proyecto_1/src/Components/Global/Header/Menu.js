import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
                <li className="nav-item m-auto">
                    <a className="nav-link active" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Home">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Products">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/categorias">Categorias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/categorias">Noticias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/contact">Contactenos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/about_us">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Register">Registrarse</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Menu;
