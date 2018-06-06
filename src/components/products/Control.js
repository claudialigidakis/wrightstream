// REACT
import React from 'react';

// ==========

class Control extends React.Component {
  render () {
    return (
      <div className="tabs is-centered is-toggle is-small">
        <ul>
          <li>
            <a>
              <span className="icon is-small"><i className="fas fa-plus" aria-hidden="true"></i></span>
              <span>Add a Product</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small"><i className="fas fa-cog" aria-hidden="true"></i></span>
              <span>Edit Categories</span>
            </a>
          </li>
        </ul>
      </div>
    );
  };
};

export default Control;
