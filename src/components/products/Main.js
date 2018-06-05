// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';

// COMPONENTS
import Product from './Product';

// ==========

class Main extends React.Component {
  componentDidMount () {
    this.props.getProducts();
  };

  render () {
    return this.props.products.map(product => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          category_id={product.category_id}
          photo={product.photo}
        />
      );
    });
  };
};

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
