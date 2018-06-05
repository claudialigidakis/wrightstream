// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../../actions/products';

// HELPERS
import query from '../../helpers/query';

// COMPONENTS
import Product from './Product';

// ==========

class Category extends React.Component {
  componentDidMount () {
    this.props.getProductsByCategory(query('id'));
  };

  render () {
    return this.props.productsByCategory.map(product => {
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
  productsByCategory: state.products.productsByCategory
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProductsByCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);
