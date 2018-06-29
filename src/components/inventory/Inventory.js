// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies, getKinds, getItems, getCategories } from '../../actions/products';
import { editSupply, editItem } from '../../actions/inventory';

// COMPONENTS
import InventorySupply from './InventorySupply';
import InventoryProduct from './InventoryProduct';

// ==========

class Inventory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      supplies: [],
      items: []
    };
  };

  componentDidMount () {
    this.props.getSupplies();
    this.props.getKinds();
    this.props.getItems();
    this.props.getCategories();
  };

  updateSupplies = event => {
    event.preventDefault();
    for (let supply of this.state.supplies) {
      this.props.editSupply(supply.id, supply.qty)
    }
  };

  updateProducts = event => {
    event.preventDefault();
    for (let item of this.state.items) {
      this.props.editItem(item.id, item.qty)
    }
  };

  editSupply = (id, qty) => {
    if (!this.state.supplies.find(supply => supply.id === id)) {
      this.state.supplies.push({id, qty});
      this.setState({supplies: this.state.supplies});
    } else {
      const supplies = this.state.supplies;
      const index = supplies.findIndex(supply => supply.id === id);
      supplies[index].qty = qty;
      this.setState({supplies: supplies});
    }
  };

  editItem = (id, qty) => {
    if (!this.state.items.find(item => item.id === id)) {
      this.state.items.push({id, qty});
      this.setState({items: this.state.items});
    } else {
      const items = this.state.items;
      const index = items.findIndex(item => item.id === id);
      items[index].qty = qty;
      this.setState({items: items});
    }
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-6">
          <h1 className="title">Supplies</h1>
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
            <button className="button is-outlined is-primary" onClick={this.updateSupplies}>Update</button>
          </div>
        </div>
        <div className="column is-6">
          <h1 className="title">Products</h1>
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
            <button className="button is-outlined is-primary" onClick={this.updateProducts}>Update</button>
          </div>
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
