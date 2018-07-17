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
                product="item"
                name={product.name}
                category_id={product.category_id}
                photo={product.photo}
                ingredients={product.supplies}
                steps={product.steps}
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
