import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3">
                        <a href="/about_us"><h5>About</h5></a>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                        <p className="mb-0">
                            Somos una empresa consolidada en el mercado nacional desde hace más de 80 años. 
                            Desde los años 30 el Centro Sport ha sido participe de la vida de los costarricenses... 
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                        <h5>Navigation</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/Products">Products</a></li>
                            <li><a href="/categorias">Categories</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/Register">Register</a></li>
                            <li><a href="/cart">Cart</a></li>
                        </ul>

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h5>Contact</h5>
                        <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-home mr-2"></i> Frander</li>
                            <li><i className="fa fa-envelope mr-2"></i> frander@gmail.com</li>
                            <li><i className="fa fa-home mr-2"></i> Gerson</li>
                            <li><i className="fa fa-envelope mr-2"></i> Gerson@gmail.com</li>
                            <li><i className="fa fa-home mr-2"></i> David</li>
                            <li><i className="fa fa-envelope mr-2"></i> David@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-12 copyright mt-3">
                        <p className="float-left">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="text-right text-muted">created with 
                         by Us <span>v. 1.0</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;