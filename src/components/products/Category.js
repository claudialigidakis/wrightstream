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
    return (
      <div className="columns">
        {
          this.props.productsByCategory.map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                product={product.supplies ? 'item' : 'bundle'}
                name={product.name}
                category_id={product.category_id}
                photo={product.photo}
                ingredients={product.supplies ? product.supplies : product.items}
                steps={product.steps}
                item={product.supplies ? product : null}
                bundle={!product.supplies ? product : null}
              />
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  productsByCategory: state.products.productsByCategory
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getProductsByCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Category);
