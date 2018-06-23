// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLinkedProducts, getSupplies, addItem } from '../../actions/products';

// COMPONENTS
import ItemAddSupply from './ItemAddSupply';

// MISC
const shortid = require('shortid');

// ==========

class ItemAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [{id: 1, qty_measure: 'lb', qty: 3}],
      steps: JSON.stringify({'1': 'one'}),
      invalid: false,
      inputs: [shortid.generate()],
      suppliess: []
    };
  };

  clear = () => {
    this.setState({
      name: '',
      linkedProduct: 'default',
      category: 'default',
      photo: '',
      stock: 0,
      supplies: [{id: 1, qty_measure: 'lb', qty: 3}],
      steps: JSON.stringify({'1': 'one'}),
      invalid: false,
      inputs: [shortid.generate()],
      suppliess: []
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      // || event.target.linkedProduct.value === 'default'
      || event.target.category.value === 'default'
    ) {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      // if (this.state.linkedProduct === 'custom') {
      //   const linkedProduct_id = 0;
      // } else {
      //   const linkedProduct_id = this.props.linkedProducts.find(linkedProduct => linkedProduct.name === this.state.linkedProduct).id;
      // }
      this.props.addItem(this.state.name, category_id, this.state.photo, this.state.stock, this.state.supplies, this.state.steps);
      this.clear();
      this.props.toggle();
    }
  };

  appendInput = () => {
    const newInput = shortid.generate();
    this.setState({inputs: this.state.inputs.concat([newInput])});
  };

  deleteInput = i => {
    this.state.inputs.splice(i, 1);
    this.setState({inputs: this.state.inputs});
  };

  addSupply = (input, id) => {
    if (!this.state.suppliess.find(supply => supply.input === input) && !this.state.suppliess.find(supply => supply.id === id)) {
      this.state.suppliess.push({input, id});
      this.setState({suppliess: this.state.suppliess});
    } else if (this.state.suppliess.find(supply => supply.input === input) && !this.state.suppliess.find(supply => supply.id === id)) {
      const supplies = this.state.suppliess;
      const index = supplies.findIndex(supply => supply.input === input);
      supplies[index].id = id;

      console.log(this.state.suppliess.find(supply => supply.input === input).qty_measure);
      if (this.state.suppliess.find(supply => supply.input === input).qty_measure) {
        supplies[index].qty_measure = this.state.suppliess.find(supply => supply.input === input).qty_measure;
      }
      this.setState({suppliess: supplies});
    }
  };

  addSupplyQty = (input, qty) => {
    if (!this.state.suppliess.find(supply => supply.input === input)) {
      this.state.suppliess.push({input, qty});
      this.setState({suppliess: this.state.suppliess});
    } else {
      const supplies = this.state.suppliess;
      const index = supplies.findIndex(supply => supply.input === input);
      supplies[index].qty = qty;
      this.setState({suppliess: supplies});
    }
  };

  addSupplyMeasure = (input, measure) => {
    const supplies = this.state.suppliess;
    const index = supplies.findIndex(supply => supply.input === input);
    supplies[index].qty_measure = measure;
    this.setState({suppliess: supplies});
    console.log('this is what is being sent', this.state.suppliess);
  };

  deleteSupply = (input) => {
    this.setState({suppliess: this.state.suppliess.filter(supply => supply.input !== input)});
  };

  componentDidMount () {
    this.props.getLinkedProducts();
    this.props.getSupplies();
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Item Name"
              id="name"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
            />
          </div>
        </div>
        {/* <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="linkedProduct"
                value={this.state.linkedProduct}
                onChange={event => this.setState({linkedProduct: event.target.value})}
                >
                <option value="default" disabled>Linked Product</option>
                {
                  this.props.linkedProducts.map(linkedProduct => {
                    return (
                      <option key={linkedProduct.id} value={linkedProduct.name}>{linkedProduct.name}</option>
                    )
                  })
                }
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
        </div> */}
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Photo URL"
              id="photo"
              value={this.state.photo}
              onChange={event => this.setState({photo: event.target.value})}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="category"
                value={this.state.category}
                onChange={event => this.setState({category: event.target.value})}
                >
                <option value="default" disabled>Category</option>
                {
                  this.props.categories.map(category => {
                    return (
                      <option key={category.id} value={category.name}>{category.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        <h1 className="title">Supplies</h1>
        {this.state.inputs.map((input, i) =>
          <ItemAddSupply
            key={input}
            input={input}
            i={i}
            length={this.state.inputs.length-1}
            appendInput={this.appendInput}
            deleteInput={this.deleteInput}
            addSupply={this.addSupply}
            addSupplyQty={this.addSupplyQty}
            addSupplyMeasure={this.addSupplyMeasure}
            deleteSupply={this.deleteSupply}
            supplies={this.props.supplies}
            selected={this.state.suppliess}
          />
        )}
        {this.state.invalid ? (
          <p id="error" className="help is-danger has-text-centered">
            Please fill out all information correctly.
          </p>
        ) : null}
        <br />
        <div className="control has-text-centered">
          <button className="button is-primary is-outlined">Add Item</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  linkedProducts: state.products.linkedProducts,
  categories: state.products.categories,
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLinkedProducts,
  getSupplies,
  addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdd);
