// REACT
import React from 'react';

// ==========

class InventorySupplyUpdated extends React.Component {
  render () {
    return (
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{this.props.supply.name}</span>
        <span>
          {Number(this.props.supply.stock_qty)} → {this.props.supplies.find(supply => supply.id === this.props.supply.id).qty}
        </span>
      </li>
    );
  };
};

export default InventorySupplyUpdated;
