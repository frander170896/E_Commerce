import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';


// Components
import Table from './Table.js'

class Cart extends Component {
  render () {
    return (
      <div>
        <MetaTags>
            <title>E-Commerece | Carrito</title>
            <meta name="description" content="Carrito de compras" />
            <meta name="keywords" content="Cart, E-Commerce, Carrito," />
            <meta property="og:title" content="E-Commerce" />
        </MetaTags>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'>E-COMMERCE CART</h1>
          </div>
        </section>
        <div className='container mb-4'>
          <div className='row'>
            <div className='col-12'>
              <Table></Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
