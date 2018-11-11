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
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/categorias">Categorías</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active"  activeStyle={{ color: 'blue' }} href="/Noticias">Noticias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/contact">Contáctenos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/about_us">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active" activeStyle={{ color: 'blue' }} href="/Register">Registrarse</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" activeClassName="active"  target="_blank" activeStyle={{ color: 'blue' }} href="http://localhost:8098/Proyectos/E_Commerce/proyecto_1/src/Components/Global/files/COMPRASONLINE.pdf">SEO</a>
                </li>
            </ul>
        </div>
    );
  }
}

export default Menu;
