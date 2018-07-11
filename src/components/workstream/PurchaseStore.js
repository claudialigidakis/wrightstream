// REACT
import React from 'react';

// ==========

class PurchaseStore extends React.Component {
  render () {
    return (
      <div className="store-logo">
        {
          this.props.purchase.store_id === 1 ? 'E' : 'C'
        }
      </div>
    );
  };
};

export default PurchaseStore;
