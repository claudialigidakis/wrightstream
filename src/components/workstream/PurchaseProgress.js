// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class PurchaseProgress extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

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
        max="100" />
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseProgress);
