// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies } from '../../actions/products';

// COMPONENTS
import Supply from './Supply';

// ==========

class Supplies extends React.Component {
  componentDidMount () {
    this.props.getSupplies();
  };

  render () {

    return this.props.supplies.map(supply => {
      return (
        <Supply
          key={supply.id}
          id={supply.id}
          name={supply.name}
          kind_id={supply.kind_id}
          source_id={supply.source_id}
        />
      );
    });
    
  };
};

const mapStateToProps = state => ({
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSupplies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Supplies);
