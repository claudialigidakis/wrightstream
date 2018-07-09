// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseItem from './PurchaseItem';
import PurchaseBundle from './PurchaseBundle';

// ==========

class PurchaseProducts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <div
        className={
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
              return 'disable';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return 'disable';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return null;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              return 'disable';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              return 'disable';
            }
          })()
        }
      >
        <ul>
          {
            this.props.purchase.bundles.map(bundle => {
              return <PurchaseBundle key={bundle.id} bundle={bundle} purchase={this.props.purchase} toggle={this.props.toggle} />;
            })
          }
          {
            this.props.purchase.items.map(item => {
              return <PurchaseItem key={item.id} item={item} purchase={this.props.purchase} toggle={this.props.toggle} />;
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
            onClick={() => this.props.changeStatus(3, true)}
          >Complete Products</button>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseProducts);
