import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <form className="form-inline my-2 my-lg-0">
            <div className="input-group input-group-sm">
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..."></input>
                <div className="input-group-append">
                    <button type="button" className="btn btn-secondary btn-number">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <a className="btn btn-success btn-sm ml-3" href="cart.html">
                <i className="fa fa-shopping-cart"></i> Cart
                <span className="badge badge-light ml-2">3</span>
            </a>
        </form>
    );
  }
}

export default Search;