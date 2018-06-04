// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../actions/auth';

// ==========

class ProductsBar extends React.Component {
  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Browse
        </p>
        <ul className="menu-list">
          <li><a>All Items</a></li>
          <li><a>All Bundles</a></li>
          <li><a>Favorites</a></li>
          <li><a>Archived</a></li>
        </ul>
        <p className="menu-label">
          Categories
        </p>
        <ul className="menu-list">
          <li><a>Blankets</a></li>
          <li><a>Cardigans</a></li>
          <li><a>Hats</a></li>
          <li><a>Scarves</a></li>
          <li><a>Sweaters</a></li>
        </ul>
      </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsBar);
