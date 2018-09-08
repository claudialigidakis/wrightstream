// REACT
import React from 'react';

// COMPONENTS
import NewPurchases from './components/NewPurchases';
import CompletedPurchases from './components/CompletedPurchases';
import InProductionPurchases from './components/InProductionPurchases';
import PurchaseHistory from './components/PurchaseHistory';

// ==========

class Purchases extends React.Component {
  render () {
    return (
      <div>
        <div className="columns">
          <NewPurchases />
          <InProductionPurchases />
          <CompletedPurchases />
        </div>
        <br />
        <div className="columns">
          <PurchaseHistory />
        </div>
      </div>
    );
  };
};

export default Purchases;
