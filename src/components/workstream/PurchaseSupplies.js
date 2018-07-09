// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import PurchaseSupply from './PurchaseSupply';

// ==========

class PurchaseSupplies extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

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

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(PurchaseSupplies);
