// REACT
import React from 'react';

// ==========

class PurchaseSupply extends React.Component {
  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {this.props.supply.completed ? (
                <span className="lnr-check"></span>
              ) : (
                <span className="lnr-cross2"></span>
              )} {this.props.supply.supplies_qty} {this.props.supply.supplies_measurement} {this.props.supply.name}
            </div>
          </div>
        </div>
      </li>
    );
  };
};

export default PurchaseSupply;
