// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// COMPONENTS
import ProductsBar from './ProductsBar';
import ProductsNav from './ProductsNav';
import ProductsProducts from './ProductsProducts';

// ==========

class Products extends React.Component {
  render () {
    console.log(this.props.user)
    return (
      <div>
        <ProductsBar />
        <ProductsNav />
        <ProductsProducts />
      </div>
    );
  };
};


const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
