// REACT
import React from 'react';

// ==========

class Nav extends React.Component {
  render () {
    return (
      <div className="tabs is-centered is-large">
        <ul>
          <li className="is-active" href="/"><a>Products</a></li>
          <li><a href="/supplies">Supplies</a></li>
          <li><a href="/sources">Sources</a></li>
        </ul>
      </div>
    );
  };
};

export default Nav;
