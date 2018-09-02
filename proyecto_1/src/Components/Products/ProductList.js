import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // jobs: this.props.job_list
        }
        this.componentDidMount=this.componentDidMount.bind(this);
        //console.log(this.state.jobs[0])
    }
    componentDidMount(){
        this.setState({jobs: this.props.job_list});
    }
    render() {
        return (
            //this.state.jobs.map(elemento => <div key={elemento.id}>
            <div>
                <h2 className='ml-3 mt-3'>Available products</h2>
                <ProductItem jobtitle={'Producto 01'}
                    job_type={'Boxer'}
                    job_description={'This is an important element for your life'}
                    created_at={'Today'}
                    how_to_apply={'Going to party'}
                    company_logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28sErpgIovXWtwxJpE-gshIZ4wtvRsCWsECUB4gJ-37vy67C3'}
                    company_url={'www.element.com'}
                    company={'CPT'}
                />
                <ProductItem jobtitle={'Producto 02'}
                    job_type={'Medicare'}
                    job_description={'This is an important element for your life'}
                    created_at={'Today'}
                    how_to_apply={'Going to party'}
                    company_logo={'http://a0.cdnfan.com/images/M/9/0/7/0/_hd_5166.jpg'}
                    company_url={'www.element.com'}
                    company={'CPT'}
                />
            </div>
        //)

        )
    }

}

export default ProductList;