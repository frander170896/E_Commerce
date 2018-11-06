import React, { Component } from 'react';

import Company from "../Global/images/logo.svg";
import NoticiaImage from '../Global/images/noticia.png'

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

class Comentarios extends Component {
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
    render() {
        return (
            <div>


                <div className="row">

                    <table data-toggle="table" id="table" className="table table-hover">
                        <thead>
                            <tr>
                               
                                <th data-field="PhoneNumber" data-sortable="true">Usuario</th>
                                <th data-field="BillIssuedDate" data-sortable="true">Descripcion</th>
                                <th data-field="PaymentDueDate" data-sortable="true">Fecha</th>
                                
                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>

                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }

}

export default Comentarios;