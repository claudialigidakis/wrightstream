// REACT
import React from 'react';

// ==========

class PurchaseProgress extends React.Component {
  render () {
    return (
      <progress
        className="progress is-small"
        value={
          (() => {
            if (this.props.progress === 'supplies') {
              return (this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100;
            } else if (this.props.progress === 'products') {
              return ((this.props.purchase.items.filter(item => item.completed).length + this.props.purchase.bundles.filter(bundle => bundle.completed).length) / (this.props.purchase.items.length + this.props.purchase.bundles.length)) * 100;
            } else {
              return 100;
            }
          })()
        }
        max="100"
      />
    );
  };
};

export default PurchaseProgress;
