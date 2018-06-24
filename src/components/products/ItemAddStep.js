// REACT
import React from 'react';

// ==========

class ItemAddStep extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: 'default',
      qty: 0,
      qty_measure: 'default'
    };
  };

  clear = () => {
    this.setState({
      id: 'default',
      qty: 0,
      qty_measure: 'default'
    });
  };

  render () {
    return (
        'hi'
    );
  };
};

export default ItemAddStep;
