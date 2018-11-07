// Dependencies
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import user from '../Global/icons/usuario.png'
import MetaTags from 'react-meta-tags'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      login_correcto: false
    }

    this.toggle = this.toggle.bind(this)
    this.cerrarSesion = this.cerrarSesion.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  cerrarSesion(){
    localStorage.setItem('loginUser', 'NULL')
    localStorage.setItem('loggedUser',null)
    window.location = '/Home'
  }
  render() {
    return (
      <div>
        <MetaTags>
          <title>E-Commerece | Registro</title>
          <meta name="description" content="Inicio de sesión, inicia la mejor experiencia de compra" />
          <meta name="keywords" content="Login,Inicio de sesión" />
          <meta property="og:title" content="E-Commerce" />
        </MetaTags>
        <a
          href='#'
          id='navbar-static-login'
          className='nav-link waves-effect waves-light'
          onClick={this.toggle}><img src={user} className='img-thumbnail imgheader ml-3' alt='login' /></a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered-y'}>
          <ModalHeader toggle={this.toggle}>
            Login
          </ModalHeader>
          <ModalBody>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className='card border-dark col-md-10'>
                <div className='card-header h2'>
                  Información del usuario:
                </div>
                <div className='card-body text-dark'>
                <p><b>Nombre: </b>{this.props.nombre}</p>
                <p><b>Email: </b>{this.props.email}</p>
                </div>
                <div>
                <Button color='danger' onClick={this.cerrarSesion}>
                        Cerrar sesión
                    </Button>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UserInfo
