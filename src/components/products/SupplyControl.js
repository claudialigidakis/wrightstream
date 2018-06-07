// REACT
import React from 'react';

// COMPONENTS
import SupplyAdd from './SupplyAdd';
import KindAdd from './KindAdd';
import KindEdit from './KindEdit';
import KindDelete from './KindDelete';

// ==========

class SupplyControl extends React.Component {
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
              <a className="dropdown-item" id="add-supply" onClick={event => this.toggle(event)}>
                Add Supply
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
              <a className="dropdown-item" id="add-kind" onClick={event => this.toggle(event)}>
                Add Kind
              </a>
              <a className="dropdown-item" id="edit-kind" onClick={event => this.toggle(event)}>
                Edit Kind
              </a>
              <a className="dropdown-item" id="delete-kind" onClick={event => this.toggle(event)}>
                Delete Kind
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              {
                this.state.action === 'add-supply' ? <SupplyAdd toggle={this.toggle} /> : (
                  this.state.action === 'add-kind' ? <KindAdd toggle={this.toggle} /> : (
                    this.state.action === 'edit-kind' ? <KindEdit toggle={this.toggle} /> : (
                      this.state.action === 'delete-kind' ? <KindDelete toggle={this.toggle} /> : null
                    )
                  )
                )
              }
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

export default SupplyControl;
