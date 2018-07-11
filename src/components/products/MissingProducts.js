// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
// import Product from './Product';

// ==========

class MissingProducts extends React.Component {
  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <div className="box missing-products">
        <h1 className="title is-6 has-text-centered">Missing Products</h1>
        <ul>
          <li>HoneyDew Lemonade</li>
          <li>Apple Juice</li>
          <li>Assorted Macarons</li>
          <li>Pumpkin Roll</li>
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MissingProducts);
