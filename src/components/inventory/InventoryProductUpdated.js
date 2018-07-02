// REACT
import React from 'react';

// ==========

class InventoryProductUpdated extends React.Component {
  render () {
    return (
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{this.props.product.name}</span>
        <span>
          {Number(this.props.product.stock_qty)} → {this.props.products.find(product => product.id === this.props.product.id).qty}
        </span>
      </li>
    );
  };
};

export default InventoryProductUpdated;
