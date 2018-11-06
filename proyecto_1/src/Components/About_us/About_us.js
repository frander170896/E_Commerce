import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';

// Componets
import Info from './Info.js'
import CardGroup from './CardGroup.js'
class About extends Component {

  render () {
    return (
      <div>
        <MetaTags>
            <title>E-Commerece | Sobre Nosotros</title>
            <meta name="description" content="Somos una empresa consolidada en el mercado nacional desde hace más de 80 años. Desde los años 30 hemos sido participe de la vida de los costarricenses al fomentar el deporte y la recreación ofreciendo productos de alta calidad a precios accesibles." />
            <meta name="keywords" content="Sobre Nosotros, E-Commerce, Frander Ramírez, Gerson Vargas, David Padilla" />
            <meta property="og:title" content="E-Commerce" />
            
          </MetaTags>
          
        <Info></Info>
        <h1 className='mt-3 mb-3'>Desarrolladores de nuestro sitio web</h1>
        <CardGroup></CardGroup>
      </div>
    )
  }
}

export default About
