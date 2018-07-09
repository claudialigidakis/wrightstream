// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class PurchaseStatus extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      class: this.props.text ? 'purchase-status' : 'card-header'
    };
  };

  render () {
    return (
      <div
        className={
          (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
              if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 0) {
                return `${this.state.class} status-red`;
              } else if ((this.props.purchase.supplies.filter(supply => supply.completed).length / this.props.purchase.supplies.length) * 100 === 100) {
                return `${this.state.class} status-green`;
              } else {
                return `${this.state.class} status-yellow`;
              }
            } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return this.state.class;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return this.state.class;
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              if (this.props.purchase.quality_check || (this.props.purchase.pick_up || this.props.purchase.pick_up === false)) {
                return `${this.state.class} status-yellow`;
              } else {
                return `${this.state.class} status-red`;
              }
            } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              return this.state.class;
            }
          })()
        }
      >
        {
          this.props.text ? (() => {
            if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === false) {
              return 'Backlog';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 1).completed === true && this.props.purchase.statuses.find(status => status.status_id === 2).completed === false) {
              return 'Pending';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 2).completed === true && this.props.purchase.statuses.find(status => status.status_id === 3).completed === false) {
              return 'Crafting';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 3).completed === true && this.props.purchase.statuses.find(status => status.status_id === 4).completed === false) {
              return 'Finalize';
            } else if (this.props.purchase.statuses.find(status => status.status_id === 4).completed === true) {
              return 'Delivery';
            }
          })() : null
        }
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseStatus);
