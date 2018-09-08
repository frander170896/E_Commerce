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
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Login" component={Login} />
    </Switch>
  </App>;

export default AppRoutes;
