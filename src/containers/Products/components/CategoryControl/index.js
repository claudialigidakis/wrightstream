// REACT
import React from 'react';

// COMPONENTS
import ItemAdd from '../ItemAdd';
import BundleAdd from '../BundleAdd';
import SupplyAdd from '../SupplyAdd';
import CategoryAdd from '../CategoryControl/components/CategoryAdd';
import CategoryEdit from '../CategoryControl/components/CategoryEdit';
import CategoryDelete from '../CategoryControl/components/CategoryDelete';

// ==========

class CategoryControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalSupply: false,
      action: '',
      modalSupplyClasses: 'modal',
      modalDisable: false
    };
  };

  toggle = event => {
    if (!this.state.modalDisable) {
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
    }
  };

  toggleSupply = () => {
    if (!this.state.modalSupply) {
      this.setState({
        modalSupply: true,
        modalSupplyClasses: this.state.modalSupplyClasses + ' is-active',
        modalDisable: true
      });
    } else {
      this.setState({
        modalSupply: false,
        modalSupplyClasses: 'modal',
        modalDisable: false
      });
    }
  };

  render () {
    return (
      <div className="products-control buttons is-right">
        <a className="button" onClick={this.props.getProductsEtsy}>
          <span className="icon"><i className="fas fa-sync-alt"></i></span>
        </a>
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <a className="button is-primary">
              <span className="icon"><i className="fas fa-plus"></i></span>
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              <a className="dropdown-item" id="add-item" onClick={event => {this.toggle(event)}}>
                Add Item
              </a>
              <a className="dropdown-item" id="add-bundle" onClick={event => {this.toggle(event)}}>
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
                (() => {
                  switch (this.state.action) {
                    case 'add-item':
                      return <ItemAdd toggle={this.toggle} toggleSupply={this.toggleSupply} />;
                    case 'add-bundle':
                      return <BundleAdd toggle={this.toggle} />;
                    case 'add-category':
                      return <CategoryAdd toggle={this.toggle} />;
                    case 'edit-category':
                      return <CategoryEdit toggle={this.toggle} />;
                    case 'delete-category':
                      return <CategoryDelete toggle={this.toggle} />;
                    default:
                      return null;
                  }
                })()
              }
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
        <div className={this.state.modalSupplyClasses}>
          <div className="modal-background" onClick={this.toggleSupply}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              <SupplyAdd toggle={this.toggleSupply} />
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggleSupply}></button>
        </div>
      </div>
    );
  };
};

export default CategoryControl;
