import React, { Component } from 'react';

import Company from "../Global/images/logo.svg";
import NoticiaImage from '../Global/images/noticia.png'



class Comentarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comentarios: [],
            show: false,
            server_url: 'http://localhost:8098/Proyectos/E_Commerce/',
            api: 'http://localhost:8098/Proyectos/E_Commerce/server/Controlador/index.php',
        };
        this.componentWillMount = this.componentWillMount.bind(this)
    }
    componentWillMount() {
        var url = this.state.api +
            '/comentario/' + this.props.NOTICIA_ID
       
        try {
            fetch(url)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log("datos component cm " + data)
                    if (data) {
                       
                        this.setState({ comentarios: data })
                    } else {
                        console.log(" not found datos component cm ")
                    }
                })
        } catch (err) { }
    }

    render() {
        return (
            <div>


                <div className="row">
                    <h4>Comentarios</h4>
                    <table data-toggle="table" id="table" className="table table-hover">
                        <thead>
                            <tr>

                                <th data-field="PhoneNumber" data-sortable="true">Usuario</th>
                                <th data-field="BillIssuedDate" data-sortable="true">Descripcion</th>
                                <th data-field="PaymentDueDate" data-sortable="true">Publicado</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.comentarios.length > 0 ?
                                    this.state.comentarios.map(elemento =>
                                        <tr key={elemento.NOTICIA_ID}>
                                            <td>{elemento.nombrecompleto}</td>
                                            <td>{elemento.DESCRIPCION}</td>
                                            <td>{elemento.FECHA}</td>
                                        </tr>

                                    ) :
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