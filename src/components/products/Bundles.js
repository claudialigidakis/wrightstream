// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBundles } from '../../actions/products';

// COMPONENTS
import Product from './Product';

// ==========

class Bundles extends React.Component {
  componentDidMount () {
    this.props.getBundles();
  };

  render () {
    return this.props.bundles.map(bundle => {
      return (
        <Product
          key={bundle.id}
          id={bundle.id}
          name={bundle.name}
          category_id={bundle.category_id}
          photo={bundle.photo}
        />
      );
    });
  };
};

const mapStateToProps = state => ({
  bundles: state.products.bundles
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBundles
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bundles);
