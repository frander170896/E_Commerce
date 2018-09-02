// Dependencies
import React, { Component } from 'react';
import CardGroup from './CardGroup';


class Home extends Component {
    componentWillMount() {
        document.title = 'Home'
    }
  render() {
    return (
      <div className="Home">
        <h1>WELCOME</h1>
        <hr/>
        <h2><small><i>Our best products:</i></small></h2>
        <CardGroup/>
      </div>
    );
  }
}

export default Home;
