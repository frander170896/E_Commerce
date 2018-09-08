// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header/Header';
import Content from './Global/Content';
import Footer from './Global/Footer/Footer';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Header/>
        <Content body={children} />
        <Footer/>
      </div>
    );
  }
}

export default App;
