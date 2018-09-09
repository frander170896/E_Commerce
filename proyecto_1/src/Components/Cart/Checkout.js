// Dependencies
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Checkout extends Component {
  constructor (props) {
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
   
  }
  ObtenerArrayId(){
    let array = JSON.parse(localStorage.Cart);
    let resultado = []
   
    for(var i = 0; i< array.length; i++){
        resultado.push({id:array[i].id});
    }
    
    console.log(resultado);
    return  JSON.stringify(resultado)
  }
  recargar(){
    localStorage.removeItem("Cart");
    this.toggle();
    window.location.reload();
  }

  Guardar (referencia) {
    let array = referencia.ObtenerArrayId();
    var url = this.state.api +
    '/compra/'
    console.log(array)
   
      fetch(url,{
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: array
    
      }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.code)
        if (data.code == '200') {
          document.getElementById('alerta').innerHTML =
          '<p class="alert alert-success"><small>Proceso completado correctamente</small><p>'
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 //
            setTimeout(this.recargar, 3000);
            
            
          
        } else {
         
        }
      })
      .catch((error) => {
          document.getElementById('alerta').innerHTML =
          '<p class="alert alert-success"><small>'+error+'</small><p>'
      })
      
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
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
                <form >
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 form-group required'>
                            <label className='control-label'>Name on Card</label>
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
                            <label className='control-label'>Card Number</label>
                            <input autocomplete='off' className='form-control card-number' size='20' type='text'></input>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='col-xs-4 form-group cvc required'>
                            <label className='control-label'>CVC</label>
                            <input autocomplete='off' className='form-control card-cvc' placeholder='ex. 311' size='4' type='text'></input>
                        </div>
                        <div className='col-xs-4 form-group expiration required'>
                            <label className='control-label'>Expiration</label>
                            <input className='form-control card-expiry-month' placeholder='MM' size='2' type='text'></input>
                        </div>
                        <div className='col-xs-4 form-group expiration required'>
                            <label className='control-label'> </label>
                            <input className='form-control card-expiry-year' placeholder='YYYY' size='4' type='text'></input>
                        </div>
                    </div>
                    <div className='form-row'>
                    <div className='col-md-12'>
                        <div className='form-control total btn btn-info'>
                        Total:
                        <span className='amount'>{"₡"+this.props.total}</span>
                        </div>
                    </div>
                    </div>
                    <div className='form-row'>
                    
                        <div className='col-md-12 form-group'>
                            <div id='alerta'></div>
                            <button className='form-control btn btn-primary submit-button' onClick={()=>{this.Guardar(this)}}>Pay »</button>
                        </div>
                        
                    </div>
                </form>
                
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

export default Checkout
