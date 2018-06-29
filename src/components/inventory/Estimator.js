// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../../actions/products';
import { estimator } from '../../actions/helper';

// COMPONENTS
import EstimatorProduct from './EstimatorProduct';

// MISC
const shortid = require('shortid');

// ==========

class Estimator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      bundles: [],
      inputs: [shortid.generate()]
    };
  };

  componentDidMount () {
    this.props.getItems();
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
  };

  deleteItem = input => {
    this.setState({items: this.state.items.filter(item => item.input !== input)});
  };

  render () {
    return (
      <div className="columns">
        <div className="column is-6">
          <h1 className="title">Products</h1>
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
          <h1 className="title">Supplies Needed</h1>
          <div className="has-text-right">
            <button className="button is-outlined is-primary" onClick={this.handleSubmit}>Update</button>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  items: state.products.items,
  supplies: state.helper.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems,
  estimator
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Estimator);
