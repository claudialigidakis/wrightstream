// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, getSupplies } from '../../actions/products';
import { addList } from '../../actions/inventory';
import { estimator } from '../../actions/helper';

// COMPONENTS
import EstimatorProduct from './EstimatorProduct';
import EstimatorSupply from './EstimatorSupply';

// MISC
const shortid = require('shortid');

// ==========

class Estimator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      bundles: [{id:1, bundle_qty: 1}],
      inputs: [shortid.generate()],
      modal: false,
      modalClasses: 'modal',
      name: '',
      invalid: false
    };
  };

  clear = () => {
    this.setState({
      items: [],
      bundles: [{id:1, bundle_qty: 1}],
      inputs: [shortid.generate()],
      modal: false,
      modalClasses: 'modal',
      name: '',
      invalid: false
    });
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.name.value) {
      this.setState({
        invalid: true
      });
    } else {
      const items = this.state.items.map(item => ({item_id: item.id, item_qty: item.item_qty}));
      const bundles = this.state.bundles.map(bundle => ({bundle_id: bundle.id, bundle_qty: bundle.bundle_qty}));
      this.props.addList(this.state.name, items, bundles);
      this.clear();
    }
  }

  appendInput = () => {
    const input = shortid.generate();
    this.setState({inputs: this.state.inputs.concat([input])});
  };

  deleteInput = i => {
    this.state.inputs.splice(i, 1);
    this.setState({inputs: this.state.inputs});
  };

  addItem = (input, id) => {
    if (!this.state.items.find(item => item.input === input) && !this.state.items.find(item => item.id === id)) {
      this.state.items.push({input, id});
      this.setState({items: this.state.items});
    } else if (this.state.items.find(item => item.input === input) && !this.state.items.find(item => item.id === id)) {
      const items = this.state.items;
      const index = items.findIndex(item => item.input === input);
      items[index].id = id;
      this.setState({items: items});
    }
    this.props.estimator(this.state.items, this.state.bundles);
  };

  addItemQty = (input, qty) => {
    if (!this.state.items.find(item => item.input === input)) {
      this.state.items.push({input, item_qty: qty});
      this.setState({items: this.state.items});
    } else {
      const items = this.state.items;
      const index = items.findIndex(item => item.input === input);
      items[index].item_qty = qty;
      this.setState({items: items});
    }
    this.props.estimator(this.state.items, this.state.bundles);
  };

  deleteItem = input => {
    this.setState({items: this.state.items.filter(item => item.input !== input)});
  };

  componentDidMount () {
    this.props.getItems();
    this.props.getSupplies();
  };

  render () {
    return (
      <div className="columns estimator-content">
        <div className="column is-6">
          <h1 className="title is-5">Products</h1>
          {this.state.inputs.map((input, i) =>
            <EstimatorProduct
              key={input}
              input={input}
              i={i}
              length={this.state.inputs.length-1}
              appendInput={this.appendInput}
              deleteInput={this.deleteInput}
              addItem={this.addItem}
              addItemQty={this.addItemQty}
              deleteItem={this.deleteItem}
              items={this.props.items}
              selected={this.state.items}
            />
          )}
        </div>
        <div className="column is-6">
          <div className="estimator-supplies">
            <h1 className="title is-5">Supplies Needed</h1>
            <ul>
              {this.props.estimatorSupplies.map(supply =>
                <EstimatorSupply
                  key={supply.supply_id}
                  supply={supply}
                />
              )}
            </ul>
            <div className="has-text-right">
              <button className="button is-outlined is-primary" onClick={this.toggle}>Add List</button>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="List Name"
                      id="name"
                      value={this.state.name}
                      onChange={event => this.setState({name: event.target.value})}
                    />
                  </div>
                </div>
                {this.state.invalid ? (
                  <p id="error" className="help is-danger has-text-centered">
                    Please fill out all information correctly.
                  </p>
                ) : null}
                <br />
                <div className="control has-text-centered">
                  <button className="button is-primary is-outlined">Add List</button>
                </div>
              </form>
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggle}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  items: state.products.items,
  supplies: state.products.supplies,
  estimatorSupplies: state.helper.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems,
  getSupplies,
  addList,
  estimator
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Estimator);
