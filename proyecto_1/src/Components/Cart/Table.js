import React, { Component } from 'react'
import Checkout from './Checkout'
// Components

class Table extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      Cart: localStorage.Cart?JSON.parse(localStorage.Cart):[],
      showCheckOut: true
    };

  }
  UpdateQuantity(q){
    alert(q);
  }
  deleteCart(index,referencia){
    let array = JSON.parse(localStorage.Cart)
    array.splice(index,1)
    referencia.setState({
      Cart:array
    });
    localStorage.setItem('Cart',JSON.stringify(array))
  }
  render () {
    if (this.state.Cart.length > 0) {
      let total = 0;
      const rows = this.state.Cart.map((producto,index) =>
                  <tr key={index} data-item={index} >
                      <td>{producto.nombre}</td>
                      <td>In stock</td>
                      <td> <input className='form-control' value="1" type='number' /></td>
                      <td>{"₡"+producto.precio}</td>
                      <td className='text-right'>
                        <button className='btn btn-sm btn-danger' onClick={()=>{this.deleteCart(index,this)}} >
                          <i className='fa fa-trash'></i>
                        </button>
                      </td>
                      <input type="hidden" value={total = total + parseInt(producto.precio)}></input>
                      
                  </tr>);
      return (
          <div className="card">
              <div className="card-header">Cart</div>
              <div className="card-body">
                      <table className="table table-hover table table-fixed ">
                          <thead className="thead-dark">
                              <tr>
                                  <th>Product</th>
                                  <th>Available</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                              {rows}
                          </tbody>
                      </table>
                      <table className="table table-hover table table-fixed"> 
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <th>Total:</th>
                          <td>{"₡"+total}</td>
                          </tr>
                      </table>         
              </div>
              <div className="row">
                <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4">
                    {this.state.showCheckOut ? <Checkout total={total}/> : ''}
                </div>
              </div>
          </div>
         
      );
  }
  return(
    <p>The car is empty</p>
  );
  
    
  }
}

export default Table
