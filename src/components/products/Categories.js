// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCategories, getUnlinkedProducts, getProducts } from '../../actions/products';

// COMPONENTS
import UnlinkedProducts from './UnlinkedProducts';

// ==========

class Categories extends React.Component {
  componentDidMount () {
    this.props.getCategories();
    this.props.getUnlinkedProducts();
    this.props.getProducts();
  };

  render () {
    return (
      <aside className="menu">
        {
          this.props.unlinkedProducts.length > 0 ? (
            <UnlinkedProducts unlinkedProducts={this.props.unlinkedProducts} />
          ) : null
        }
        <p className="menu-label">
          Browse
        </p>
        <ul className="menu-list">
          <li><a href="/products">Recently Added</a></li>
          <li><a href="/products/items">All Items</a></li>
          <li><a href="/products/bundles">All Bundles</a></li>
          <li><a className="disable">Favorites</a></li>
          <li><a className="disable">Archived</a></li>
        </ul>
        <p className="menu-label">
          Categories
        </p>
        <ul className="menu-list">
          {
            this.props.categories.map(category => {
              return (
                <li key={category.id}><a href={`/products/category?id=${category.id}`}>{category.name}</a></li>
              )
            })
          }
        </ul>
        <p className="menu-label">
          Filter
        </p>
        <ul className="menu-list">
          <li><a className="disable">Color</a></li>
          <li><a className="disable">Difficulty</a></li>
          <li><a className="disable">Material</a></li>
        </ul>
        <p className="menu-label">
          Sort
        </p>
        <ul className="menu-list">
          <li><a className="disable">Name</a></li>
          <li><a className="disable">Date Added</a></li>
          <li><a className="disable">Category</a></li>
          <li><a className="disable">Popularity</a></li>
        </ul>
      </aside>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories,
  unlinkedProducts: state.products.unlinkedProducts,
  products: state.products.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCategories,
  getUnlinkedProducts,
  getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
