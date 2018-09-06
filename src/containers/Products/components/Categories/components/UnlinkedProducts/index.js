// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import UnlinkedProduct from './components/UnlinkedProduct';
import ItemAdd from '../../../ItemAdd';
import BundleAdd from '../../../BundleAdd';

// ==========

class UnlinkedProducts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      modalDisable: false,
      unlinkedProduct: '',
      productType: ''
    };
  };

  toggle = id => {
    if (!this.state.modalDisable) {
      if (!this.state.modal) {
        this.setState({
          modal: true,
          modalClasses: this.state.modalClasses + ' is-active',
          unlinkedProduct: id
        });
      } else {
        this.setState({
          modal: false,
          modalClasses: 'modal',
          unlinkedProduct: ''
        });
      }
    }
  };

  selectProductType = type => {
    this.setState({
      productType: type
    });
  };

  clear = () => {
    this.setState({
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      modalDisable: false,
      unlinkedProduct: '',
      productType: ''
    });
  };

  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <div>
        <div className="box missing-products">
          <h1 className="title is-6 has-text-centered">Unlinked Products</h1>
          <ul>
            {
              this.props.unlinkedProducts.map(unlinkedProduct => {
                return (
                  <UnlinkedProduct
                    key={unlinkedProduct.product_id}
                    unlinkedProduct={unlinkedProduct}
                    toggle={this.toggle}
                  />
                );
              })
            }
          </ul>
        </div>
        <div className={this.state.modalClasses}>
          <div
            className="modal-background"
            onClick={() => {
              this.toggle();
              this.clear();
            }}
          ></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                this.state.productType === '' ? (
                  <div>
                    <button className="button" onClick={() => {this.selectProductType('item')}}>
                      Item
                    </button>
                    <button className="button" onClick={() => {this.selectProductType('bundle')}}>
                      Bundle
                    </button>
                  </div>
                ) : null
              }
              {
                (() => {
                  if (this.state.productType === 'item') {
                    return (
                      <ItemAdd
                        toggle={this.toggle}
                        unlinkedProduct={this.props.unlinkedProducts.find(unlinkedProduct => this.state.unlinkedProduct === unlinkedProduct.product_id)}
                      />
                    );
                  } else if (this.state.productType === 'bundle') {
                    return (
                      <BundleAdd
                        toggle={this.toggle}
                        unlinkedProduct={this.props.unlinkedProducts.find(unlinkedProduct => this.state.unlinkedProduct === unlinkedProduct.product_id)}
                      />
                    );
                  } else {
                    return null;
                  }
                })()
              }
            </div>
          </div>
          <button
            className="modal-close is-large"
            onClick={() => {
              this.toggle();
              this.clear();
            }}
          >
          </button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnlinkedProducts);
