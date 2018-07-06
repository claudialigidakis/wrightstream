// REACT
import React from 'react';

// COMPONENTS
import NewPurchases from './NewPurchases'
import CompletedPurchases from './CompletedPurchases'
import InProductionPurchases from './InProductionPurchases'
import PurchaseHistory from './PurchaseHistory'
// ==========

class Purchases extends React.Component {

  render() {
    return (
    <div>
    <div className="columns">
      <NewPurchases />
      <InProductionPurchases />
      <CompletedPurchases />
    </div>
    <div className="columns">
      <PurchaseHistory />
    </div>
  </div>);
  };
};

export default Purchases;
