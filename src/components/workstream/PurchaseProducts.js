// REACT
import React from 'react';

// COMPONENTS
import PurchaseItem from './PurchaseItem';
import PurchaseBundle from './PurchaseBundle';

// ==========

class PurchaseProducts extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {
            this.props.purchase.bundles.map(bundle => {
              return <PurchaseBundle key={bundle.id} bundle={bundle} purchase={this.props.purchase} staff={this.props.staff} toggle={this.props.toggle} />;
            })
          }
          {
            this.props.purchase.items.map(item => {
              return <PurchaseItem key={item.id} item={item} purchase={this.props.purchase} staff={this.props.staff} toggle={this.props.toggle} />;
            })
          }
        </ul>
        <div className="has-text-centered" style={{padding: '1rem'}}>
          <button
            className="button is-small is-primary"
            disabled={
              (() => {
                if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true) {
                  return true;
                } else {
                  if (((this.props.purchase.items.filter(item => item.completed).length + this.props.purchase.bundles.filter(bundle => bundle.completed).length) / (this.props.purchase.items.length + this.props.purchase.bundles.length)) * 100 === 100) {
                    return false;
                  } else {
                    return true;
                  }
                }
              })()
            }
            onClick={() => {
              this.props.assignStaff();
              this.props.changeStatus(3, true);
            }}
          >Complete Products</button>
        </div>
      </div>
    );
  };
};

export default PurchaseProducts;
