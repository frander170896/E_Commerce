// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import Cart from '../Cart/Cart';

// Assets


class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div>
          <div className="Content margenes-contenido">
            {body}
          </div>
      </div>
    );
  }
}

export default Content;
