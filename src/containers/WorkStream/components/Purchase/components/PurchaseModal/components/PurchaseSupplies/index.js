// REACT
import React from 'react';

// COMPONENTS
import PurchaseSupply from './components/PurchaseSupply';

// ==========

class PurchaseSupplies extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.purchase.supplies.map(supply => {
            return <PurchaseSupply key={supply.supplies_id} supply={supply} />;
          })
        }
      </ul>
    );
  };
};

export default PurchaseSupplies;
