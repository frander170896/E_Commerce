import React, { Component } from 'react'
import about from '../Global/images/about-us.png'

class Info extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>
          <img
            src={about}
            width='100%'
            className='img-responsive'
            alt='Abou_Uds'></img>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>
          <p>
          Somos una empresa consolidada en el mercado nacional desde hace más de 80 años. 
          Desde los años 30 hemos sido participe de la vida de los costarricenses al fomentar
          el deporte y la recreación ofreciendo productos de alta calidad a precios accesibles.
          Durante más de 80 años hemos ido evolucionando junto con las necesidades de nuestros clientes. 
          Hoy en día tenemos 5 sucursales en el GAM, donde nuestros clientes pueden encontrar una gran variedad de 
          implementos deportivos para su disciplina o deporte favorito. Además ofrecemos servicios como inscripciones a 
          las más reconocidas carreras de atletismo del país, venta de uniformes personalizados y asesoría técnica para 
          empresas e instituciones.
          </p>
        </div>
      </div>
    )
  }
}
export default Info
