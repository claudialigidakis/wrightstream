// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// ==========

class ProductsProducts extends React.Component {
  render () {
    console.log(this.props.user)
    return (
      <div>
this is the products
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsProducts);
