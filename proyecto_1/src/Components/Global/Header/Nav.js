import React, { Component } from 'react'

// components
import Menu from './Menu.js'
import Search from './Search.js'

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      usuario: JSON.parse(localStorage.loggedUser)
    }
  }

  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='/home'>E-commerce</a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExampleDefault'
            aria-controls='navbarsExampleDefault'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          
          <Menu></Menu>
          <Search amount={this.props.AmountCart}></Search>
        </div>
      </nav>
    )
  }
}

export default Nav
