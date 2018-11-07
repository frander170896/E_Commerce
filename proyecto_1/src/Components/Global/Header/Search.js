import React, { Component } from 'react'

import Login from '../../Login/Login'
import UserInfo from '../../Login/UserInfo'
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: true,
      usuario: []
    }
    this.handleShowLogin = this.handleShowLogin.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  handleShowLogin() {
    this.setState({ showLogin: true })
  }
  componentWillMount() {

    this.setState({
      usuario: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : []
    })
  }
  render() {
    return (
      <form className='form-inline my-2 my-lg-0'>
        <a className='btn btn-success btn-sm ml-3' href='/cart'><i className='fa fa-shopping-cart'></i> Cart <span className='badge badge-light ml-2'>{this.props.amount}</span></a>
        <p>
          {this.state.showLogin ?
            this.state.usuario && this.state.usuario != '' ? <UserInfo nombre={this.state.usuario.nombrecompleto} email={this.state.usuario.email} />

              :
              <Login /> : <Login />
          }
        </p>
       
      </form>
    )
  }
}

export default Search
