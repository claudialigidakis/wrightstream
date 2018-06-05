// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSuppliesByKind } from '../../actions/products';

// HELPERS
import query from '../../helpers/query';

// COMPONENTS
import Supply from './Supply';

// ==========

class Kind extends React.Component {
  componentDidMount () {
    this.props.getSuppliesByKind(query('id'));
  };

  render () {
    return this.props.suppliesByKind.map(supply => {
      return (
        <Supply
          key={supply.id}
          id={supply.id}
          name={supply.name}
          kind_id={supply.kind_id}
          source_id={supply.source_id}
        />
      );
    })
  };
};

const mapStateToProps = state => ({
  suppliesByKind: state.products.suppliesByKind
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSuppliesByKind
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Kind);
