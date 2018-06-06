// REACT
import React from 'react';

// ==========

class SourceControl extends React.Component {
  render () {
    return (
      <div className="products-control buttons is-right">
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button is-primary">
              <span className="icon"><i className="fas fa-plus"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Add Source
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button">
              <span className="icon"><i className="fas fa-cog"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                Add Type
              </a>
              <a className="dropdown-item">
                Rename Type
              </a>
              <a className="dropdown-item">
                Delete Type
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SourceControl;
