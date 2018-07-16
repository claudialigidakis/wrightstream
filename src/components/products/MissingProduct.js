// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
// import Product from './Product';

// ==========

class MissingProduct extends React.Component {
  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <li>{this.props.product.title}</li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MissingProduct);
