import React, { Component } from 'react';


//Components


class Table extends Component {
  render() {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Dada</td>
                            <td>In stock</td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">124,90 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Toto</td>
                            <td>In stock</td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">33,90 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Titi</td>
                            <td>In stock</td>
                            <td><input className="form-control" type="text" value="1" /></td>
                            <td className="text-right">70,00 €</td>
                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td className="text-right">255,90 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td className="text-right">6,90 €</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>346,90 €</strong></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
  }
}

export default Table;


