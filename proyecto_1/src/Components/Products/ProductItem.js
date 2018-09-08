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

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobtitle: null,
            job_description: null,
            company_logo: null,
            company_url: null,
            job_type: null,
            company_description: null,
            created_at: null,
            how_to_apply: null,
            show: false
        };
        this.handleShow = this.handleShow.bind(this);
    }
    handleShow() {
        this.setState({ show: true });
    }
    generarArray(a,b,c,d){
        const array = {a,b,c,d}
        return array;
    }
    handleDetails(a,b,c,d,e) { // se reciben los datos del articulo para enviarselos al padre
        const array = this.generarArray(a,b,c,d);
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
                                <h4 className="card-title">Product</h4>
                                <h5 className="card-subtitle mb-2">{this.props.nombre}</h5>
                                <p> <i>
                                    <strong>Description:  </strong>
                                     {this.props.descripcion ? this.props.descripcion : 'Not especified.'}
                                </i>
                                </p>
                                <p>
                                    <i><strong>Job Type:  </strong> {this.props.precio}</i>
                                </p>
                                <p className="card-text">
                                <i><strong>Last Modified:  </strong> {this.props.creado}</i>
                                
                                </p>
                                <button className="btn btn-dander"
                                 onClick={()=>{this.handleDetails(this.props.nombre,
                                 this.props.descripcion,
                                 this.props.precio,this.props.creado) 
                                 }} >Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductItem;