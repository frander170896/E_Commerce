// Dependencies
import React, { Component } from 'react';

import Bag from "../Global/images/shoppingbag.png";
import imagen1 from "../Global/images/chelseauniform.png";
import imagen2 from "../Global/images/camisacolombia.jpg";
import imagen3 from "../Global/images/balonvolleyball.jpg";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_url: this.props.company_url,
      company_name: this.props.company_name,
      company_logo: this.props.company_logo
    }
  }
  render() {
    return (
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{this.state.company_name}</h5>
          <p className="card-text">
            <img className="card-img-top img-fluid rounded" src={this.state.company_logo} alt="Imagen del producto" />

          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">

            <a className='btn btn-primary' target="_blank" href={this.state.company_url}> Ir a los productos
              <img className="rounded" src={Bag} alt="Imagen del producto" />
            </a>
          </small>
        </div>
      </div>
    );
  }
}
class CardGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple_url: null,
      microsft_url: null,
      microsft_logo: null
    }
  }
  render() {
    return (
      <div className="card-group p-3">

        <Card
          company_name={'Uniforme del Chelsea'}
          company_logo={imagen1}
          company_url={'/Products'}
        />
        <Card
          company_name={'Camisa de Colombia'}
          company_logo={imagen2}
          company_url={'/Products'}
        />
        <Card
          company_name={'Balón de Volleyball'}
          company_logo={imagen3}
          company_url={'/Products'}
        />
      </div>
    )
  }
}

export default CardGroup;
