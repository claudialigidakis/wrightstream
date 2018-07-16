// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
import MissingProduct from './MissingProduct';

// ==========

class MissingProducts extends React.Component {
  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <div>
        {
          this.props.etsyProducts.length > 0 ? (
            <div className="box missing-products">
              <h1 className="title is-6 has-text-centered">Missing Products</h1>
              <ul>
                {
                  this.props.etsyProducts.map(etsyProduct => {
                    return (
                      <MissingProduct key={etsyProduct.listing_id} product={etsyProduct} />
                    );
                  })
                }
              </ul>
            </div>
          ) : null
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MissingProducts);
