// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems, getSupplies } from '../../actions/products';
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
      bundles: [{id: 1, bundle_qty: 1}],
      inputs: [shortid.generate()]
    };
  };

  handleSubmit = event => {
    this.props.estimator(this.state.items, this.state.bundles)
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
    this.handleSubmit();
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
              <button className="button is-outlined is-primary" onClick={this.handleSubmit}>Add List</button>
            </div>
          </div>
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
  estimator
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Estimator);
