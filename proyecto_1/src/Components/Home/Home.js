// Dependencies
import React, { Component } from 'react';
import CardGroup from './CardGroup';
import MetaTags from 'react-meta-tags'
import '../Global/css/SocialBar.css';
import SocialBar from './SocialBar'

class Home extends Component {
    
  render() {
    return (
      <div className="Home">
       <MetaTags>
          <title>E-Commerece | Inicio</title>
          <meta name="description" content="Te ofrecemos los mejores artículos del mercado, todo en articulos deportivos" />
          <meta name="keywords" content="Home,Inicio,Top artículos deportivos, suplementos deportivos" />
          <meta property="og:title" content="E-Commerce" />
        </MetaTags>
        <h1>Bienvenido!</h1>
        <hr/>
        <h2><small><i>Nuestros Productos:</i></small></h2>
        <CardGroup/>
        <SocialBar/>
      </div>
    );
  }
}

export default Home;
