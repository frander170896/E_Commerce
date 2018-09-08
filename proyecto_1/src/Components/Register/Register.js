// Dependencies
import React, { Component } from 'react'
import register_img from '../Global/images/register.png'

import '../Global/css/Register/register.css'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
      email: '',
      password: '',
      password2: '',
      full_name: '',
      user_name: ''
    }
    this.handleCreateAccount = this.handleCreateAccount.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePass = this.handlePass.bind(this)
    this.handleValidarPass = this.handleValidarPass.bind(this)
    this.handleNombre = this.handleNombre.bind(this)
    this.handleTipoUsuario = this.handleTipoUsuario.bind(this)
  }
  componentWillMount () {
    document.title = 'Register'
  }

  handleCreateAccount (event) {
    event.preventDefault()
    // alert('entra this.state.tipo_usuario == "-1"')
    if (this.state.password !== this.state.password2) {
      document.getElementById('alerta').innerHTML =
        '<p class="alert alert-danger">Las contraseñas no son iguales. Repitalas.<p>'
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 //
    } else {
      var data1 = JSON.stringify({
        metodo: 'insertarUsuario',
        metodo: 'insertarUsuario',
      })

      fetch(this.state.api+'/usuario', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data1
      }).then((response) => response.json())
        .then((data) => {
          if (data.code == '200') {
            document.getElementById('alerta').innerHTML =
              '<p class="alert alert-success"><small>Proceso completado correctamente</small><p>'
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 //
            localStorage.setItem('path', 'login')
          } else {
            document.getElementById('alerta').innerHTML =
              '<p class="alert alert-danger">' + data.msg + '<p>'
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 //
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  handlePass (event) {
    var dato = event.target.value
    this.setState(
      {
        password: dato
      }
    )
  }

  handleValidarPass (event) {
    var dato = event.target.value
    this.setState(
      {
        password2: dato
      }
    )
  }

  handleEmail (event) {
    var dato = event.target.value
    this.setState(
      {
        email: dato
      }
    )
  }
  handleNombre (event) {
    var dato = event.target.value
    this.setState(
      {
        full_name: dato
      }
    )
  }

  handleUserName (event) {
    var dato = event.target.value
    this.setState(
      {
        user_name: dato
      }
    )
  }
  handleTipoUsuario (event) {
    var dato = event.target.value
    this.setState(
      {
        gender: dato
      }
    )
  }

  render () {
    return (

      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
          {/*<img src={register_img} alt="Register"/>*/}
          <h1>Registro</h1>
          <img src={register_img} alt='Register' />
          <p>
            Al regístrate en nuestro sitio usted obtendrá múltiples beneficios referentes a nuestros productos, podrás analizar diferentes ofertas de trabajo
            que se ofrecen y ser postulantes de las mismas directamente. Actualmente se encuentra puestos de trabajo en la mayoría de las áreas lo cual ayudaría a obtener
            mayores posibilidades de empleo. Además, puede obtener información directamente del sitio de la pagina la que quieras postular. Los usuarios tendrán múltiple
            opciones de filtrado según sus necesidades o su áreas especifica de preferencias lo que le permite tener opciones mas especificas acorde a su experiencia y estudios.
          </p>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
          <div className='register text-center'>
            <form className='register-form' action='' method=''>
              <fieldset className='scheduler-border'>
                <legend className='scheduler-border'>
                  Register
                </legend>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Full Name'
                      required
                      onChange={this.handleNombre} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <input
                      className='form-control'
                      type='text'
                      placeholder='User Name'
                      required
                      onChange={this.handleUserName} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right'>
                    <input
                      type='radio'
                      id='male'
                      name='gender'
                      value='1'
                      onClick={this.handleTipoUsuario} />
                    <label htmlFor='male'>
                      <span></span>Male
                    </label>
                  </div>
                  <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left'>
                    <input
                      type='radio'
                      id='female'
                      name='gender'
                      value='2'
                      onClick={this.handleTipoUsuario} />
                    <label htmlFor='female'>
                      <span></span>Female
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <input
                      className='form-control'
                      type='email'
                      placeholder='Email'
                      required
                      onClick={this.handleEmail} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Password'
                      onClick={this.handlePass} 
                      required/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <input
                      className='form-control'
                      type='password'
                      placeholder='Confirm Password'
                      onClick={this.handleValidarPass} 
                      required/>
                  </div>
                </div>
                {
                    /*
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div className='custom-file'>
                      <input
                        type='file'
                        className='custom-file-input'
                        name='file'
                        required/>
                      <label className='custom-file-label' htmlFor='customFile'>
                        Attach CV
                      </label>
                    </div>
                  </div>
                </div>
                */
                }
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <button className='btn btn-primary' type='button' name='finalize'>
                      Create account
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default Register
