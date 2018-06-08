// REACT
import React from 'react';

// COMPONENTS
import ItemAdd from './ItemAdd';
import BundleAdd from './BundleAdd';
import CategoryAdd from './CategoryAdd';
import CategoryEdit from './CategoryEdit';
import CategoryDelete from './CategoryDelete';

// ==========

class CategoryControl extends React.Component {
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
              <a className="dropdown-item" id="add-item" onClick={event => this.toggle(event)}>
                Add Item
              </a>
              <a className="dropdown-item" id="add-bundle" onClick={event => this.toggle(event)}>
                Add Bundle
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
              <a className="dropdown-item" id="add-category" onClick={event => this.toggle(event)}>
                Add Category
              </a>
              <a className="dropdown-item" id="edit-category" onClick={event => this.toggle(event)}>
                Edit Category
              </a>
              <a className="dropdown-item" id="delete-category" onClick={event => this.toggle(event)}>
                Delete Category
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                this.state.action === 'add-item' ? <ItemAdd toggle={this.toggle} /> : (
                  this.state.action === 'add-bundle' ? <BundleAdd toggle={this.toggle} /> : (
                    this.state.action === 'add-category' ? <CategoryAdd toggle={this.toggle} /> : (
                      this.state.action === 'edit-category' ? <CategoryEdit toggle={this.toggle} /> : (
                        this.state.action === 'delete-category' ? <CategoryDelete toggle={this.toggle} /> : null
                      )
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

export default CategoryControl;