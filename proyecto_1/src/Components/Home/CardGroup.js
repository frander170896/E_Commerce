// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import Bag from "../Global/images/shoppingbag.png";
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
            <img className="card-img-top img-fluid rounded" src={this.state.company_logo} alt="Card image cap" />

          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">

            <a className='btn btn-primary' target="_blank" href={'www.google.com'}> Buy product
              <img className="rounded" src={Bag} alt="Card image cap" />
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
          company_name={'Loreal'}
          company_logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vep4B0sLW91yey4smjbRIemh4roKE8n5l1xQkuDaX9zQKiYv'}
          company_url={'https://www.microsoft.com'}
        />
        <Card
          company_name={'Cardio Aspirine'}
          company_logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ujgmt1bnOqPvhhejMfksoI5MZpjM_pTEcBJBYUFz58f-CdgA'}
          company_url={'https://www.apple.com/'}
        />
        <Card
          company_name={'Vendatek'}
          company_logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuxRp6YurZXqNKV9YRDoJ1USWplFQvZADl072LQlgqKLSm2_2'}
          company_url={'https://www.bolttoken.org/'}
        />
      </div>
    )
  }
}

export default CardGroup;
