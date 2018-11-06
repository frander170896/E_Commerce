import React, { Component } from 'react';

import Company from "../Global/images/logo.svg";
import NoticiaImage from '../Global/images/noticia.png'
import Comentarios from '../Noticias/Comentarios'
class ProductDetail extends Component {
    render() {
        return (
            <img src={NoticiaImage}
                className="img-thumbnail img-company" alt="noticia img" />
        );
    }
}

class ApplyLink extends Component {
    render() {
        return (
            <a className='active btn btn-link text-white' target="_blank" href={this.props.company_url}>
                {this.props.action_name}
            </a>
        );
    }
}

class NoticiaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            server_url: 'http://localhost:8098/Proyectos/E_Commerce/',
            api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
            show: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.comentar = this.comentar.bind(this);
        this.guardar = this.guardar.bind(this);
    }
    handleShow() {
        this.setState({ show: true });
    }
    generarArray(id, nombre, descripcion, precio, creado) {
        const array = { id, nombre, descripcion, precio, creado }
        return JSON.stringify(array);
    }
    handleDetails(id, nombre, descripcion, precio, creado) { // se reciben los datos del articulo para enviarselos al padre
        const array = this.generarArray(id, nombre, descripcion, precio, creado);
        this.props.evento(array);
    }
    comentar(e) {
        const index2 = e.currentTarget.getAttribute('data-item');
        this.guardar(index2,1,'hola');
    }

    guardar(noticia, usuario, comentario) {
        alert('guardando')
        var url = this.state.api +
            '/comentario//';
        var data1 = JSON.stringify({
            metodo: 'insertarComentario',
            DESCRIPCION: comentario,
            TOPIC: "Noticias",
            USUARIO_ID: usuario,
            NOTICIA_ID: noticia
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

    render() {
        return (
            <div>


                <div className="row p-2">
                    <div className="col-sm-2">
                        <div className="card m-0  card-job">
                            <div className="card-body">
                                <p>
                                    <b>{this.props.nombre}</b>
                                </p>
                                <ProductDetail show={this.state.show}
                                    visible={this.state.show}
                                    server_url={this.props.server_url}
                                    company_logo={this.props.imagen} />
                            </div>
                            <p>
                                <i>{this.props.company_description}
                                    <ApplyLink company_url={this.props.imagen} action_name={'Visit Us'} />
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="card  card-job">
                            <div className="card-body">
                                <h4 className="card-title">Noticia # {this.props.NOTICIA_ID}</h4>

                                <p> <i>
                                    <strong>Tópico:  </strong>
                                    {this.props.TOPIC == 1 ?
                                        "Informativa" : this.props.TOPIC == 2 ? "Descuentos" : "Importantes"}
                                </i>
                                </p>
                                <p className="card-text">
                                    <i><strong>Noticia:  </strong> {this.props.DESCRIPCION}</i>

                                </p>
                                <p className="card-text">
                                    <i><strong>Fecha de Publicación:  </strong> {this.props.FECHA}</i>

                                </p>
                                <div class="row">
                                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <textarea name="otherDetails" class="form-control" rows="2" id="comment" placeholder="Other details"></textarea>
                                    </div>
                                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                        <button className="btn btn-primary btn-sm" key={this.props.NOTICIA_ID} data-item={this.props.NOTICIA_ID} onClick={this.comentar}>Comentar</button>
                                    </div>

                                </div>
                                <div className='row' id='alerta'></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <Comentarios NOTICIA_ID={this.props.NOTICIA_ID} />
                    </div>
                </div>
            </div>
        );
    }

}

export default NoticiaItem;