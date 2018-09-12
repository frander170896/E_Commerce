import React, { Component } from 'react'

import Login from '../../Login/Login'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLogin: true,
      usuario: localStorage.loggedUser?JSON.parse(localStorage.loggedUser):[]
    }
    this.handleShowLogin = this.handleShowLogin.bind(this)
  }
  handleShowLogin () {
    this.setState({ showLogin: true })
  }
  render () {
    return (
      <form className='form-inline my-2 my-lg-0'>
        {/*<div className="input-group input-group-sm">
                                        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..."></input>
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-secondary btn-number">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    */}
        
         
          
        <a className='btn btn-success btn-sm ml-3' href='/cart'><i className='fa fa-shopping-cart'></i> Cart <span className='badge badge-light ml-2'>{this.props.amount}</span></a>
        <p>
          {this.state.showLogin ? <Login /> : ''}
        </p>
        {this.state.usuario ?
        <div className='badge badge-info'>
            <p>
               Welcome: { this.state.usuario.usuario }
            </p>
          </div>
          : ''}
      </form>
    )
  }
}

export default Search
