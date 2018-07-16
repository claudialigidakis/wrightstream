// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSupplies, addItem } from '../../actions/products';

// COMPONENTS
import ItemAddSupply from './ItemAddSupply';
import ItemAddStep from './ItemAddStep';

// MISC
const shortid = require('shortid');

// ==========

class ItemAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.unlinkedProduct ? this.props.unlinkedProduct.title : '',
      unlinkedProduct: this.props.unlinkedProduct ? this.props.unlinkedProduct.title : 'default',
      category: 'default',
      photo: this.props.unlinkedProduct ? this.props.unlinkedProduct.image : '',
      stock: 0,
      supplies: [],
      suppliesInputs: [shortid.generate()],
      steps: [],
      stepsInputs: [shortid.generate()],
      invalid: false
    };
  };

  clear = () => {
    this.setState({
      name: this.props.unlinkedProduct ? this.props.unlinkedProduct.title : '',
      unlinkedProduct: this.props.unlinkedProduct ? this.props.unlinkedProduct.title : 'default',
      category: 'default',
      photo: this.props.unlinkedProduct ? this.props.unlinkedProduct.image : '',
      stock: 0,
      supplies: [],
      suppliesInputs: [shortid.generate()],
      steps: [],
      stepsInputs: [shortid.generate()],
      invalid: false
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !event.target.name.value
      || event.target.unlinkedProduct.value === 'default'
      || event.target.category.value === 'default'
      || this.state.supplies.length === 0
      || this.state.supplies.find(supply => supply.qty === 0)
      || this.state.supplies.find(supply => !supply.qty)
      || this.state.supplies.find(supply => !supply.qty_measure)
      || this.state.steps.length === 0
    ) {
      this.setState({
        invalid: true
      });
    } else {
      const category_id = this.props.categories.find(category => category.name === this.state.category).id;
      const unlinkedProduct_id = this.state.unlinkedProduct === 'custom' ? 0 : this.props.unlinkedProducts.find(unlinkedProduct => unlinkedProduct.title === this.state.unlinkedProduct).product_id;
      const steps = {};
      for (let i = 0; i < this.state.steps.length; i++) {
        steps[i+1] = this.state.steps[i].step;
      }
      this.props.addItem(this.state.name, unlinkedProduct_id, category_id, this.state.photo, this.state.stock, this.state.supplies, JSON.stringify(steps));
      this.clear();
      this.props.toggle();
    }
  };

  appendSuppliesInput = () => {
    const input = shortid.generate();
    this.setState({suppliesInputs: this.state.suppliesInputs.concat([input])});
  };

  appendStepsInput = () => {
    const input = shortid.generate();
    this.setState({stepsInputs: this.state.stepsInputs.concat([input])});
  };

  deleteSuppliesInput = i => {
    this.state.suppliesInputs.splice(i, 1);
    this.setState({suppliesInputs: this.state.suppliesInputs});
  };

  deleteStepsInput = i => {
    this.state.stepsInputs.splice(i, 1);
    this.setState({stepsInputs: this.state.stepsInputs});
  };

  addSupply = (input, id) => {
    if (!this.state.supplies.find(supply => supply.input === input) && !this.state.supplies.find(supply => supply.id === id)) {
      this.setState({supplies: [...this.state.supplies, {input, id}]});
    } else {
      this.setState({supplies: this.state.supplies.map(supply => supply.input === input ? {...supply, id} : {...supply})});
    }
  };

  addSupplyQty = (input, qty) => {
    if (!this.state.supplies.find(supply => supply.input === input)) {
      this.setState({supplies: [...this.state.supplies, {input, qty}]});
    } else {
      this.setState({supplies: this.state.supplies.map(supply => supply.input === input ? {...supply, qty} : {...supply})});
    }
  };

  addSupplyMeasure = (input, measure) => {
    this.setState({supplies: this.state.supplies.map(supply => supply.input === input ? {...supply, qty_measure: measure} : {...supply})});
  };

  addStep = (input, step) => {
    if (!this.state.steps.find(step => step.input === input)) {
      this.setState({steps: [...this.state.steps, {input, step}]});
    } else {
      this.setState({steps: this.state.steps.map(existingStep => existingStep.input === input ? {...existingStep, step} : {...existingStep})});
    }
  }

  deleteSupply = input => {
    this.setState({supplies: this.state.supplies.filter(supply => supply.input !== input)});
  };

  deleteStep = input => {
    this.setState({steps: this.state.steps.filter(step => step.input !== input)});
  };

  componentDidMount () {
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
        <div className="field">
          <div className="control">
            <div className="select">
              <select
                id="unlinkedProduct"
                value={this.state.unlinkedProduct}
                onChange={event => this.setState({unlinkedProduct: event.target.value})}
                >
                <option value="default" disabled>Linked Product</option>
                {
                  this.props.unlinkedProducts.map(unlinkedProduct => {
                    return (
                      <option key={unlinkedProduct.product_id} value={unlinkedProduct.title}>{unlinkedProduct.title}</option>
                    )
                  })
                }
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
        </div>
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
        {this.state.suppliesInputs.map((input, i) =>
          <ItemAddSupply
            key={input}
            input={input}
            i={i}
            length={this.state.suppliesInputs.length-1}
            appendInput={this.appendSuppliesInput}
            deleteInput={this.deleteSuppliesInput}
            addSupply={this.addSupply}
            addSupplyQty={this.addSupplyQty}
            addSupplyMeasure={this.addSupplyMeasure}
            deleteSupply={this.deleteSupply}
            supplies={this.props.supplies}
            selected={this.state.supplies}
          />
        )}
        <h1 className="title">Steps</h1>
        {this.state.stepsInputs.map((input, i) =>
          <ItemAddStep
            key={input}
            input={input}
            i={i}
            length={this.state.stepsInputs.length-1}
            appendInput={this.appendStepsInput}
            deleteInput={this.deleteStepsInput}
            addStep={this.addStep}
            deleteStep={this.deleteStep}
            steps={this.state.steps}
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
  unlinkedProducts: state.products.unlinkedProducts,
  categories: state.products.categories,
  supplies: state.products.supplies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSupplies,
  addItem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdd);
