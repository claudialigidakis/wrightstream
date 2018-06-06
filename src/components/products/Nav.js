// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className="tabs is-centered is-large products-tabs">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/products/supplies">Supplies</a></li>
          <li><a href="/products/sources">Sources</a></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
