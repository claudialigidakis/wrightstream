// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// ==========

class EstimatorSupply extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      qty: this.props.supply.stock_qty
    };
  };

  render () {
    return (
      <li>
        <span className="supply-qty">{this.props.supply.supply_qty}</span>
        <span className="supply-unit">{this.props.supply.supply_measure_type}</span>
        <span className="supply-qty">{this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name}</span>
      </li>
    );
  };
};

const mapStateToProps = state => ({
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EstimatorSupply);
