// REACT
import React from 'react';

// ==========

class PurchaseSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <span className="lnr-check"></span> 3 oz Milk
            </div>
          </div>
        </div>
      </li>
    );
  };
};

export default PurchaseSupply;
