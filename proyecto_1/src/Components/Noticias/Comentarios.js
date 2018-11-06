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
            comentarios: [],
            show: false
        };
     
    }
    componentWillMount() {
        var url = this.state.api +
            '/comentario/'+this.props.NOTICIA_ID
        try {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    if (data) {
                        //console.log(data)
                        this.setState({ comentarios: data })
                    } else {
                    }
                })
        } catch (err) { }
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
                        {
                            this.state.comentarios.length>0?
                            this.state.comentarios.map(elemento => <div key={elemento.NOTICIA_ID}>
                             <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>

                            </tr>
                        </div>
                        ):
                        <p>No hay comentarios...</p>
                }

                           

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }

}

export default Comentarios;