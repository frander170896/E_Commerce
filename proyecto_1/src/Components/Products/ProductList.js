import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Lupa from '../Global/images/lupa.png';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Cart: []
           // jobs: this.props.job_list
        }

        this.componentDidMount=this.componentDidMount.bind(this);
        this.handleClickAddCart = this.handleClickAddCart.bind(this);
        //console.log(this.state.jobs[0])
    }
    componentDidMount(){
        this.setState({jobs: this.props.job_list});
    }
    handleClickAddCart(data) {
        this.setState({Cart: data})
        console.log(this.state.Cart)
        // aqui se debe de llamar el metodo que consume el web service con el fin de que envie los datos del articulo seleccionado y lo agregue a la variable de session.
    }
    filterList(event) {
        var updatedList = this.state.jobs;
        updatedList = updatedList.filter(function (item) {
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            datosFiltrados: updatedList,
            isfiltrado: true
        });
    }
    render() {
        return (
            //this.state.jobs.map(elemento => <div key={elemento.id}>
            <div>
                <h2 className='ml-3 mt-3'>Available products</h2>
                <div className="input-group-prepend m-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">
                                <img src={Lupa} />
                            </span>
                            <input className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="text"
                                placeholder="Search" onChange={this.filterList} />
                        </div>
                <ProductItem jobtitle={'Producto 01'}
                    job_type = {'Boxer'}
                    job_description={'This is an important element for your life'}
                    created_at={'Today'}
                    how_to_apply={'Going to party'}
                    company_logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28sErpgIovXWtwxJpE-gshIZ4wtvRsCWsECUB4gJ-37vy67C3'}
                    company_url={'www.element.com'}
                    company={'CPT'}
                    evento = {this.handleClickAddCart}
                />
                <ProductItem jobtitle={'Producto 02'}
                    job_type={'Medicare'}
                    job_description={'This is an important element for your life'}
                    created_at={'Today'}
                    how_to_apply={'Going to party'}
                    company_logo={'http://a0.cdnfan.com/images/M/9/0/7/0/_hd_5166.jpg'}
                    company_url={'www.element.com'}
                    company={'CPT'}
                    evento = {this.handleClickAddCart}
                />
            </div>
        //)

        )
    }

}

export default ProductList;