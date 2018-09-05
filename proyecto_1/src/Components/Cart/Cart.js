import React, { Component } from 'react'

// Components
import Table from './Table.js'

class Cart extends Component {
  render () {
    return (
      <div>
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
