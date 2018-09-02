// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import ProductList from './Components/Products/ProductList';
import Header from './Components/Global/Header/Header'
import Cart from './Components/Cart/Cart.js'
import Footer from './Components/Global/Footer/Footer'
import About from './Components/About_us/About_us'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/about" component={Header} />
      <Route exact path="/contact" component={Footer} />
      <Route exact path="/about_us" component={About} />
      <Route exact path="/Products" component={ProductList} />
    </Switch>
  </App>;

export default AppRoutes;
