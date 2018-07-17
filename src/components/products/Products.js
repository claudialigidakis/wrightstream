// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getRecentProducts } from '../../actions/products';

// COMPONENTS
import Product from './Product';

// ==========

class Main extends React.Component {
  componentDidMount () {
    this.props.getRecentProducts();
  };

  render () {
    return (
      <div className="columns">
        {
          this.props.recentProducts.map(product => {
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
  recentProducts: state.products.recentProducts
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRecentProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
