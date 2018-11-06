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

            show: false
        };
        this.handleShow = this.handleShow.bind(this);
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
    comentar(usuario,noticia){

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
                                            <button className="btn btn-primary btn-sm" onClick={''}>Comentar</button>
                                        </div>
                                    
                                </div>
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