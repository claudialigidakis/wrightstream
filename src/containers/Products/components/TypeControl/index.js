// REACT
import React from 'react';

// COMPONENTS
import SourceAdd from '../SourceAdd';
import TypeAdd from './components/TypeAdd';
import TypeEdit from './components/TypeEdit';
import TypeDelete from './components/TypeDelete';

// ==========

class TypeControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      action: ''
    };
  };

  toggle = event => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action: event.target.id
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal',
        action: ''
      });
    }
  };

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
              <a className="dropdown-item" id="add-source" onClick={event => this.toggle(event)}>
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
              <a className="dropdown-item" id="add-type" onClick={event => this.toggle(event)}>
                Add Type
              </a>
              <a className="dropdown-item" id="edit-type" onClick={event => this.toggle(event)}>
                Edit Type
              </a>
              <a className="dropdown-item" id="delete-type" onClick={event => this.toggle(event)}>
                Delete Type
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                this.state.action === 'add-source' ? <SourceAdd toggle={this.toggle} /> : (
                  this.state.action === 'add-type' ? <TypeAdd toggle={this.toggle} /> : (
                    this.state.action === 'edit-type' ? <TypeEdit toggle={this.toggle} /> : (
                      this.state.action === 'delete-type' ? <TypeDelete toggle={this.toggle} /> : null
                    )
                  )
                )
              }
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

export default TypeControl;
