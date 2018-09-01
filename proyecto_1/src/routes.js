// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import App from './Components/App';
import Header from './Components/Global/Header/Header'
import Cart from './Components/Cart/Cart.js'
import Footer from './Components/Global/Footer/Footer'


const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Cart} />
      <Route exact path="/about" component={Header} />
      <Route exact path="/contact" component={Footer} />
    </Switch>
  </App>;

export default AppRoutes;
