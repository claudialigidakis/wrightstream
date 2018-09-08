// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, getBundles, getCategories } from '../../../../../../../../state/actions/products';

// ==========

class PurchaseProductDetails extends React.Component {
  componentDidMount () {
    this.props.getItems();
    this.props.getBundles();
    this.props.getCategories();
  };

  render () {
    const product = this.props.bundle ? this.props.bundles.find(bundle => bundle.id === this.props.product.id) : this.props.items.find(item => item.id === this.props.product.id);
    return (
      <div>
        {
          product ? (
            <div>
              <p className="image is-2by1">
                <img src={product.photo} alt={product.name} />
              </p>
              <div className="modal-container">
                <div>
                  <h1 className="title is-3">{product.name}</h1>
                  <small>
                    {this.props.bundle ? 'Bundle' : 'Item'}
                    {
                      this.props.categories.find(category => category.id === product.category_id) ?
                      (
                        <span>
                          <span className="product-bullet"> &bull; </span>
                          {this.props.categories.find(category => category.id === product.category_id).name}
                        </span>
                      ) : null
                    }
                  </small>
                </div>
                <div>
                  <h2 className="subtitle is-5">{this.props.bundle ? 'Items' : 'Supplies'}</h2>
                  <ul>
                    {
                      this.props.bundle ?
                        product.items.map((item, i) => {
                          return (
                            <li key={i}>
                              <span className="supply-qty">{item.stock_qty}</span>
                              {item.name}
                            </li>
                          );
                        })
                      :
                        product.supplies.map((supply, i) => {
                          return (
                            <li key={i}>
                              <span className="supply-qty">{supply.stock_qty}</span>
                              <span className="supply-unit">{supply.qty_measure}</span>
                              {supply.name}
                            </li>
                          );
                        })
                    }
                  </ul>
                </div>
                <div>
                  <h2 className="subtitle is-5">Steps</h2>
                  <ol>
                    {
                      Object.values(JSON.parse(product.steps)).map((step, i) => {
                        return (
                          <li key={i}>
                            {step}
                          </li>
                        );
                      })
                    }
                  </ol>
                </div>
              </div>
            </div>
          ) : null
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  items: state.products.items,
  bundles: state.products.bundles,
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems,
  getBundles,
  getCategories
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseProductDetails);
