// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies, getKinds, getItems, getCategories } from '../../../../state/actions/products';
import { editSupply, editItem } from '../../../../state/actions/inventory';

// COMPONENTS
import InventorySupply from './components/InventorySupply';
import InventorySupplyUpdated from './components/InventorySupplyUpdated';
import InventoryProduct from './components/InventoryProduct';
import InventoryProductUpdated from './components/InventoryProductUpdated';

// ==========

class Inventory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      supplies: [],
      suppliesModal: false,
      suppliesModalClasses: 'modal',
      items: [],
      productsModal: false,
      productsModalClasses: 'modal'
    };
  };

  clear = () => {
    this.setState({
      supplies: [],
      suppliesModal: false,
      suppliesModalClasses: 'modal',
      items: [],
      productsModal: false,
      productsModalClasses: 'modal'
    });
  }

  toggleSupplies = () => {
    if (!this.state.suppliesModal) {
      this.setState({
        suppliesModal: true,
        suppliesModalClasses: this.state.suppliesModalClasses + ' is-active'
      });
    } else {
      this.setState({
        suppliesModal: false,
        suppliesModalClasses: 'modal'
      });
    }
  };

  toggleProducts = () => {
    if (!this.state.productsModal) {
      this.setState({
        productsModal: true,
        productsModalClasses: this.state.productsModalClasses + ' is-active'
      });
    } else {
      this.setState({
        productsModal: false,
        productsModalClasses: 'modal'
      });
    }
  };

  updateSupplies = event => {
    event.preventDefault();
    for (let supply of this.state.supplies) {
      this.props.editSupply(supply.id, supply.qty);
    }
    this.clear();
  };

  updateProducts = event => {
    event.preventDefault();
    for (let item of this.state.items) {
      this.props.editItem(item.id, item.qty);
    }
    this.clear();
  };

  editSupply = (id, qty) => {
    if (!this.state.supplies.find(supply => supply.id === id)) {
      this.setState({supplies: [...this.state.supplies, {id, qty}]});
    } else {
      this.setState({supplies: this.state.supplies.map(supply => supply.id === id ? {...supply, qty} : {...supply})});
    }
  };

  editItem = (id, qty) => {
    if (!this.state.items.find(item => item.id === id)) {
      this.setState({items: [...this.state.items, {id, qty}]});
    } else {
      this.setState({items: this.state.items.map(item => item.id === id ? {...item, qty} : {...item})});
    }
  };

  componentDidMount () {
    this.props.getSupplies();
    this.props.getKinds();
    this.props.getItems();
    this.props.getCategories();
  };

  render () {
    return (
      <div className="columns inventory-content">
        <div className="column is-6">
          <h1 className="title is-5">Supplies</h1>
          <table className="table is-striped is-hoverable is-fullwidth inventory-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Kind</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.supplies.map(supply => {
                  return (
                    <InventorySupply
                      key={supply.id}
                      supply={supply}
                      editSupply={this.editSupply}
                    />
                  );
                })
              }
            </tbody>
          </table>
          <div className="has-text-right">
            <button
              className="button is-outlined is-primary"
              disabled={this.state.supplies.length === 0 ? true : false}
              onClick={this.toggleSupplies}
            >Update</button>
          </div>
        </div>
        <div className="column is-6">
          <h1 className="title is-5">Products</h1>
          <table className="table is-striped is-hoverable is-fullwidth inventory-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.items.map(item => {
                  return (
                    <InventoryProduct
                      key={item.id}
                      product={item}
                      editItem={this.editItem}
                    />
                  );
                })
              }
            </tbody>
          </table>
          <div className="has-text-right">
            <button
              className="button is-outlined is-primary"
              disabled={this.state.items.length === 0 ? true : false}
              onClick={this.toggleProducts}
            >Update</button>
          </div>
        </div>
        <div className={this.state.suppliesModalClasses}>
          <div className="modal-background" onClick={this.toggleSupplies}></div>
          <div className="modal-content">
            <div className="modal-container">
              <h1 className="title is-5">Confirm Supply Changes</h1>
              <ul>
                {
                  this.props.supplies.filter(supply =>  this.state.supplies.find(editedSupply => editedSupply.id === supply.id)).map(supply => {
                    if (Number(supply.stock_qty) !== this.state.supplies.find(editedSupply => editedSupply.id === supply.id).qty) {
                      return (
                        <InventorySupplyUpdated
                          key={supply.id}
                          supply={supply}
                          supplies={this.state.supplies}
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                }
              </ul>
              <div className="has-text-centered control">
                <button className="button is-outlined is-primary" onClick={this.toggleSupplies}>Cancel</button>
                <button className="button is-success" onClick={this.updateSupplies}>Update</button>
              </div>
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggleSupplies}></button>
        </div>
        <div className={this.state.productsModalClasses}>
          <div className="modal-background" onClick={this.toggleProducts}></div>
          <div className="modal-content">
            <div className="modal-container">
              <h1 className="title is-5">Confirm Product Changes</h1>
              <ul>
                {
                  this.props.items.filter(item =>  this.state.items.find(editedItem => editedItem.id === item.id)).map(item => {
                    if (Number(item.stock_qty) !== this.state.items.find(editedItem => editedItem.id === item.id).qty) {
                      return (
                        <InventoryProductUpdated
                          key={item.id}
                          product={item}
                          products={this.state.items}
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                }
              </ul>
              <div className="has-text-centered control">
                <button className="button is-outlined is-primary" onClick={this.toggleProducts}>Cancel</button>
                <button className="button is-success" onClick={this.updateProducts}>Update</button>
              </div>
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggleProducts}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  supplies: state.products.supplies,
  kinds: state.products.kinds,
  items: state.products.items,
  categories: state.products.categories
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSupplies,
  getKinds,
  getItems,
  getCategories,
  editSupply,
  editItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
