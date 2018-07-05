// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class OrdersSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  };

  render () {
    return (
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>
          {
            this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name
          }
        </span>
        <span>
          {this.props.supply.supply_qty} {this.props.supply.supply_measure_type}
        </span>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrdersSupply);
