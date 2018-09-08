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

    };
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-2 has-text-right is-paddingless">
          <span>{this.props.supply.supply_qty}</span>
        </div>
        <div className="column is-1 is-paddingless" style={{marginLeft: '1rem', marginRight: '1rem'}}>
          <span className="supply-unit">{this.props.supply.supply_measure_type}</span>
        </div>
        <div className="column is-paddingless">
          <span>{this.props.supplies.find(supply => supply.id === this.props.supply.supply_id).name}</span>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EstimatorSupply);
