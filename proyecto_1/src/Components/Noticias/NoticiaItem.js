import React, { Component } from 'react';

import Company from "../Global/images/logo.svg";

class ProductDetail extends Component {
    render() {
        return (
            <img src={this.props.company_logo ?
                this.props.server_url+this.props.company_logo : Company} 
                 className="img-thumbnail img-company" alt="company" />
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
    generarArray(id,nombre,descripcion,precio,creado){
        const array = {id,nombre,descripcion,precio,creado}
        return JSON.stringify(array);
    }
    handleDetails(id,nombre,descripcion,precio,creado) { // se reciben los datos del articulo para enviarselos al padre
        const array = this.generarArray(id,nombre,descripcion,precio,creado);
        this.props.evento(array);
    }
    render() {
        return (
            <div>
              

                <div className="row p-2">
                    <div className="col-sm-3">
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
                    <div className="col-sm-9 ">
                        <div className="card  card-job">
                            <div className="card-body">
                                <h4 className="card-title">Noticia # {this.props.NOTICIA_ID}</h4>
                                
                                <p> <i>
                                    <strong>Tópico:  </strong>
                                     {this.props.TOPIC==1 ? 
                                        "Informativa" : 'Not especified.'}
                                </i>
                                </p>                              
                                <p className="card-text">
                                <i><strong>Noticia:  </strong> {this.props.DESCRIPCION}</i>
                                
                                </p>
                                <p className="card-text">
                                <i><strong>Fecha de Publicación:  </strong> {this.props.FECHA}</i>
                                
                                </p>
                                <button className="btn btn-danger">Comentar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default NoticiaItem;