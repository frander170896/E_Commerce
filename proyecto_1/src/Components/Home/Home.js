// Dependencies
import React, { Component } from 'react';
import CardGroup from './CardGroup';
import MetaTags from 'react-meta-tags'

class Home extends Component {
    
  render() {
    return (
      <div className="Home">
       <MetaTags>
          <title>E-Commerece | Inicio</title>
          <meta name="description" content="Te ofrecemos los mejores artículos del mercado, todo en articulos deportivos" />
          <meta name="keywords" content="Home,Inicio" />
          <meta property="og:title" content="E-Commerce" />
        </MetaTags>
        <h1>WELCOME</h1>
        <hr/>
        <h2><small><i>Our best products:</i></small></h2>
        <CardGroup/>
      </div>
    );
  }
}

export default Home;
