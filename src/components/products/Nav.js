// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  render () {
    return (
      <div className="tabs is-centered is-large">
        <ul>
          <li className="is-active" href="/products"><a>Products</a></li>
          <li><a href="/products/supplies">Supplies</a></li>
          <li><a href="/products/sources">Sources</a></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
