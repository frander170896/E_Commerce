// Dependencies
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Credit from '../Global/icons/credit.jpg'
class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
      email: '',
      password: '',
      login_correcto: false
    }
    this.recargar = this.recargar.bind(this)
    this.toggle = this.toggle.bind(this)
    this.Guardar = this.Guardar.bind(this)
  }
  ObtenerArrayId() {
    let array = localStorage.Cart ? JSON.parse(localStorage.Cart) : []
    let resultado = []

    for (var i = 0; i < array.length; i++) {
      resultado.push({ id: array[i].id });
    }

    //console.log(resultado);
    return JSON.stringify(resultado)
  }
  recargar() {

    this.toggle();
    window.location.reload();
  }

  Guardar() {
    localStorage.removeItem("Cart");
    let array = this.ObtenerArrayId();
    var url = this.state.api +
      '/compra/'
    fetch(url, {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: array

    }).then((response) => response.json())
      .then((data) => {

        if (data.code == '200') {
          document.getElementById('alerta').innerHTML =
            '<p class="alert alert-success"><small>Proceso completado correctamente</small><p>'
          document.body.scrollTop = 0 // For Safari
          document.documentElement.scrollTop = 0 //

          this.toggle();
          window.location.reload();



        } else {
          //alert(data.msj)
        }
      })
      .catch((error) => {
        document.getElementById('alerta').innerHTML =
          '<p class="alert alert-success"><small>' + error + '</small><p>'
      })

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <a
          href="#"
          id='navbar-static-login'
          className='nav-link waves-effect waves-light btn btn-success mt-1 mb-3'
          onClick={this.toggle}> Check out cart  <i className="fa fa-shopping-cart"></i>  </a>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered-y'}>
          <ModalHeader toggle={this.toggle}>
            Pay
          </ModalHeader>
          <ModalBody>
            <div className='container'>
              <form onSubmit={this.Guardar}>
                <div className='row'>

                  <img src={Credit} alt='Register' />
                  <div className='col-xs-12 col-sm-12 col-md-12 form-group required'>
                    <label className='control-label'> Nombre de la tarjeta</label>
                    <select className='form-control' type='text'>
                      <option value="Visa">Visa</option>
                      <option value="MasterCard">MasterCard</option>
                      <option value="American Express">American Express</option>
                      <option value="Visa Electron">Visa Electron</option>
                    </select>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 form-group required'>
                    <label className='control-label'>Número de la tarjeta</label>
                    <input autocomplete='off' className='form-control card-number' size='20' type='number' minlength='10' maxlength='19'></input>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-xs-4 form-group cvc required'>
                    <label className='control-label'>CVC</label>
                    <input autocomplete='off' className='form-control card-cvc' size='3' placeholder='ex. 311'  type='text' required></input>
                  </div>
                  <div className='col-xs-4 form-group expiration required'>
                    <label for="start" className='control-label'>Fecha de expiración</label>
                    <input type="month" className='form-control'  min="2018-11" name="bdaymonth"/>
                   
                  </div>
                  
                </div>
                <div className='form-row'>
                  <div className='col-md-12'>
                    <div className='form-control total btn btn-info'>
                      Total:
                        <span className='amount'>{"₡" + this.props.total}</span>
                    </div>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='col-md-12 form-group'>
                    <div id='alerta'></div>
                    <button className='form-control btn btn-primary submit-button'>Pay »</button>
                  </div>

                </div>
              </form>

            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Checkout
