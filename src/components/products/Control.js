// REACT
import React from 'react';

// ==========

class Control extends React.Component {
  render () {
    return (
      <div className="products-control buttons is-right">
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button is-primary">
              <span className="icon"><i className="fas fa-plus" aria-hidden="true"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Add Item
              </a>
              <a className="dropdown-item">
                Add Bundle
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button">
              <span className="icon"><i className="fas fa-cog" aria-hidden="true"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Add Category
              </a>
              <a className="dropdown-item">
                Rename Category
              </a>
              <a className="dropdown-item">
                Delete Category
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Control;
