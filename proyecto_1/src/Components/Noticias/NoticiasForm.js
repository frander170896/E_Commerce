// Dependencies
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import user from '../Global/icons/usuario.png'

class NoticiasForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
            topic: 0,
            descripcion: '',
            login_correcto: false
        }

        this.toggle = this.toggle.bind(this)
        this.guardar = this.guardar.bind(this)
        this.handleTopic = this.handleTopic.bind(this)
        this.handleDescripcion = this.handleDescripcion.bind(this)
    }

    guardar(event) {
        var url = this.state.api +
            '/noticia/'
        event.preventDefault()
        // alert('entra this.state.tipo_usuario == "-1"')
        if (this.state.topic < 1 || this.state.descripcion == "") {
            document.getElementById('alerta').innerHTML =
                '<p class="alert alert-danger">No ha completado el formulario.<p>'
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 //
        } else {
            var data1 = JSON.stringify({
                metodo: 'insertarNoticia',
                TOPIC: this.state.topic,
                DESCRIPCION: this.state.descripcion
            })
            console.log(data1)
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data1
            }).then((response) => response.json())
                .then((data) => {
                    if (data.code == '200') {
                        document.getElementById('alerta').innerHTML =
                            '<p class="alert alert-success"><small>Proceso completado correctamente</small><p>'
                        document.body.scrollTop = 0 // For Safari
                        document.documentElement.scrollTop = 0 //
                        
                        this.setState({
                            modal: !this.state.modal
                        })
                        document.location.reload();
                    } else {
                        document.getElementById('alerta').innerHTML =
                            '<p class="alert alert-danger">' + data.msg + '<p>'
                        document.body.scrollTop = 0 // For Safari
                        document.documentElement.scrollTop = 0 //
                    }
                })
                .catch((error) => {
                    document.getElementById('alerta').innerHTML =
                        '<p class="alert alert-success"><small>' + error + '</small><p>'
                })
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    handleTopic(event) {
        var val = event.target.value
        this.setState({
            topic: val
        })
    }

    handleDescripcion(event) {
        var val = event.target.value
        this.setState({
            descripcion: val
        })
    }
    render() {
        return (
            <div>
                <a
                    href='#'
                    id='navbar-static-login'
                    className='btn btn-success btn-sm'
                    onClick={this.toggle}>Agregar Noticia</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className + ' modal-dialog-centered-y'}>
                    <ModalHeader toggle={this.toggle}>
                        Agregar Noticia
          </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='card border-dark col-md-10'>
                                <div className='card-header h2'>
                                    Noticia
                </div>
                                <div className='card-body text-dark'>
                                    <form>
                                        <div className='form-group'>
                                            <label className='sr-only'>
                                                Descripción
                      </label>
                                            <div className='input-group mb-2'>
                                                <div className='input-group-prepend'>
                                                    <div className='input-group-text'>
                                                        T
                          </div>
                                                </div>
                                                <select className='form-control'
                                                    id="NUMBER_CALLED_TYPE_CODE" name="TOPIC" onClick={this.handleTopic}>
                                                    <option value="-1">Select</option>
                                                    <option value="1">Informativa</option>
                                                    <option value="2">Descuentos</option>
                                                    <option value="3">Importante</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label className='sr-only'>
                                                Decripción
                      </label>
                                            <div className='input-group mb-2'>
                                                <div className='input-group-prepend'>
                                                    <div className='input-group-text fa fa-user'></div>
                                                </div>

                                                <textarea name="DESCRIPCION" className="form-control"
                                                    rows="2" id="comment" placeholder="Descipción" onChange={this.handleDescripcion}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <Button color='secondary' className='btn btn-primary mb-2' onClick={this.guardar}>
                                            Guardar
                    </Button>
                                        <div id='alerta'></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={this.toggle}>
                            Close
            </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default NoticiasForm
