// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import ProductList from './Components/Products/ProductList';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart.js'
import About from './Components/About_us/About_us'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import Categorias from './Components/Categorias/Categorias'
import Header from './Components/Global/Header/Header'
import Footer from './Components/Global/Footer/Footer'
/*
                  Standardize Your URL Structures
Pensamos en que esta técnica de optimización es de suma importancia, ya 
perimite tener nuestro sitio ordenado, permitiendo a nuestros clientes navegar
de una manera más facil, como se puede observar creamos URLs con una extención 
menor a 4 niveles de directorios, sin dejar de lado que usamos URLs descriptivas
haciendo que los navegadores reconoscan e indexen nuestras direcciones de manera
más facil, par lograr esto decidimos implementar en nuestro proyecto react routes,
el cual es una de las librerias más pontentes que posee react para el manejo de 
rutas.

 */

const AppRoutes = () =>
  <App>
    <Switch>
    <Route exact path="/Home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/about" component={Header} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about_us" component={About} />
      <Route exact path="/Products" component={ProductList} />
      <Route exact path="/categorias" component={Categorias} />
      <Route exact path="/News" component={Categorias} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
